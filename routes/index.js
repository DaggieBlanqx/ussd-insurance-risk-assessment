import express from "express";
import { riskQuestions } from "../utils/index.js";

const router = express.Router();

// In-memory data store for survey responses
const customers = new Map();

// Function to handle customer data
function handleCustomerData(phoneNumber, sessionId, answer) {
  if (!customers.has(phoneNumber)) {
    // This is a new customer
    customers.set(phoneNumber, {
      sessionId,
      phoneNumber,
      currentQuestionIndex: 0,
      answers: [],
    });
  }

  // Update customer data
  const customerData = customers.get(phoneNumber);
  customers.set(phoneNumber, {
    ...customerData,
    sessionId,
    currentQuestionIndex: customerData.currentQuestionIndex + 1,
    answers: [...customerData.answers, answer],
  });

  return customers.get(phoneNumber);
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
    outputText = `CON ${question}\n Reply with either:\n${options.join("\n ")}`;
  } else {
    // No more questions to ask
    const riskScore = calculateRiskScore(customerData.answers);
    outputText = `END Thank you for completing the risk assessment.\nYour risk score is ${riskScore}.\nWe will contact you shortly with your personalized insurance options.`;
    customers.delete(phoneNumber);
  }
  return res.send(outputText);
  // return res.send({
  //   sessionId,
  //   response: outputText,
  //   responseType: "RESPONSE",
  // });
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
router.use("/", (req, res) => {
  res.status(404).json({
    ping: "pong",
  });
});
export default router;
