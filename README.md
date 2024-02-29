# About Risk Assess USSD

![demo.gif](./assets/demo.gif)

Risk Assess USSD is a USSD application that allows users to assess their insurance risk and get a quote for their insurance policy.
The application is built using the Africa's Talking USSD API.

A customer can dial the USSD code and answer a few questions to get a risk assessment and a quote for their insurance policy.

The customer also receives a follow-up SMS with the details of the insurance policy.

The application is built using Node.js and Express.js.

# Prerequisites

- Africa's Talking Account
- An API Key from Africa's Talking
- A USSD code (You can start with a free sandbox USSD code)

## Getting Started

1. Clone the repository
2. Install the dependencies using `npm install`
3. Change the `.env.example` file to `.env` and add your Africa's Talking API Key and username
4. Run the application using `npm start` or `npm run dev` for development
5. The application will be running on `http://localhost:3000`
6. Use a tool like [ngrok](https://ngrok.com/) or [localtunnel](https://localtunnel.github.io/www/) to expose the application to the internet
7. You can now use the exposed URL to configure the USSD application on Africa's Talking
8. The entry point for the USSD application is `http://<exposed-url>/ussd`
