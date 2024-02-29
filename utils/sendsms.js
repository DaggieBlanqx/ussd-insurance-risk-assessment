import AfricasTalking from "africastalking";

// Set your app credentials
const credentials = {
  apiKey: process.env.apiKey,
  username: process.env.username,
};

// Initialize the SDK
const africasTalking = AfricasTalking(credentials);

const sms = africasTalking.SMS;

const sendSMS = ({ phoneNumber, message }) => {
  console.log({ phoneNumber, message });
  const options = {
    // Set the numbers you want to send to in international format
    to: [phoneNumber],
    // Set your message
    message,
  };

  console.log({ options });
  // That’s it, hit send and we’ll take care of the rest
  sms.send(options).then(console.log).catch(console.log);
};

export default sendSMS;
