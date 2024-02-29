export const _riskQuestions = [
  {
    question: "Do you smoke cigarettes or use tobacco products?",
    options: { yes: 2, no: 0 },
  },
  {
    question: "How often do you consume alcohol?",
    options: { never: 0, rarely: 1, occasionally: 2, frequently: 3 },
  },
  {
    question: "Do you engage in regular physical exercise?",
    options: { yes: 0, no: 2 },
  },
  {
    question: "Have you been diagnosed with any chronic medical conditions?",
    options: { yes: 3, no: 0 },
  },
  {
    question: "Do you have a family history of hereditary diseases?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "How often do you engage in high-risk activities such as extreme sports or recreational drug use?",
    options: { never: 0, rarely: 1, occasionally: 2, frequently: 3 },
  },
  {
    question: "Are you currently taking any prescription medications?",
    options: { yes: 1, no: 0 },
  },
  {
    question:
      "Have you undergone any major surgeries or medical procedures in the past?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "Do you have a history of mental health disorders or psychological conditions?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "How often do you undergo routine health check-ups and screenings?",
    options: { regularly: 0, occasionally: 1, never: 2 },
  },
  {
    question:
      "Have you experienced any significant life events recently, such as a divorce, job loss, or bereavement?",
    options: { yes: 2, no: 0 },
  },
  {
    question: "Are you involved in any hazardous occupations or industries?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "Do you regularly commute by car, and if so, how many miles do you typically drive per week?",
    options: { none: 0, "0-50 miles": 1, "51-100 miles": 2, "100+ miles": 3 },
  },
  {
    question: "Do you own or rent your primary residence?",
    options: { own: 0, rent: 1 },
  },
  {
    question:
      "Have you experienced any property damage or loss in the past due to natural disasters or accidents?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "Do you have any history of cardiovascular diseases or high blood pressure?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "Are you currently pregnant or planning to become pregnant in the near future?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "Do you participate in any risky behaviors, such as driving without seat belts or using electronic devices while driving?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "Are you currently receiving any disability benefits or have you filed any disability claims in the past?",
    options: { yes: 2, no: 0 },
  },
  {
    question: "Have you filed any insurance claims in the past?",
    options: { yes: 1, no: 0 },
  },
  {
    question: "Do you have any dependents who rely on you financially?",
    options: { yes: 1, no: 0 },
  },
  {
    question:
      "Are you involved in any high-liability activities, such as owning a business or serving on a board of directors?",
    options: { yes: 2, no: 0 },
  },
  {
    question:
      "Have you experienced any recent changes in your income or employment status?",
    options: { yes: 1, no: 0 },
  },
  {
    question: "Do you have any outstanding debts or financial obligations?",
    options: { yes: 1, no: 0 },
  },
  {
    question:
      "Are you planning any significant lifestyle changes in the near future, such as moving to a new location or changing careers?",
    options: { yes: 1, no: 0 },
  },
];

// return  a few questions for the USSD session
export const riskQuestions = _riskQuestions.slice(0, 3);
