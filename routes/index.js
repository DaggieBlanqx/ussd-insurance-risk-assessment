import express from "express";
import { riskQuestions } from "../utils/index.js";
import sendSMS from "../utils/sendsms.js";

const router = express.Router();

// In-memory data store for survey responses
const customers = new Map();

// Function to handle customer data
function handleCustomerData(phoneNumber, sessionId, answer) {
  const customer = customers.get(sessionId);

  if (!customer) {
    // This is a new customer
    customers.set(sessionId, {
      sessionId,
      phoneNumber,
      currentQuestionIndex: 0,
      answers: [],
    });
  } else {
    // Update customer data
    const customerData = customers.get(sessionId);
    customers.set(sessionId, {
      ...customerData,
      sessionId,
      currentQuestionIndex: customerData.currentQuestionIndex + 1,
      answers: [...customerData.answers, answer],
    });
  }

  return customers.get(sessionId);
}

// Function to handle USSD requests
function handleUssd(req, res) {
  const questions = riskQuestions;
  const { phoneNumber, sessionId, text } = req.body;

  const answer = text.trim().toLowerCase();
  const customerData = handleCustomerData(phoneNumber, sessionId, answer);
  const { currentQuestionIndex } = customerData;

  const quiz = questions[currentQuestionIndex];
  const question = quiz?.question;
  const options = Object.keys(quiz?.options || {});

  let outputText = "";

  if (question) {
    // More questions to ask
    outputText = `CON ${question}\n\n Reply with either:\n\n${options.join("\n ")}`;
  } else {
    // No more questions to ask
    const riskScore = calculateRiskScore(customerData.answers);
    const message = `Thank you for completing the risk assessment.\n\nYour risk score is #${riskScore}.\n\nWe will contact you shortly with your personalized insurance options.`;
    outputText = `END ${message}`;

    sendSMS({ phoneNumber, message });
  }
  customers.delete(phoneNumber);
  return res.send(outputText);
}

// Function to calculate risk score based on user responses
const calculateRiskScore = (answers) => {
  let riskScore = 0;

  answers.forEach((response, index) => {
    const options = riskQuestions[index].options;
    const score = options?.[response] || 0;
    riskScore += score;
  });

  return riskScore;
};

router.post("/ussd", handleUssd);
export default router;
