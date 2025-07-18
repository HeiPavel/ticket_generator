# Ticket Generator
***
This web application allows users to create a personalized event ticket by filling out a simple form. Once submitted, a custom ticket is generated and sent directly to the user's email address.
## [Link](https://ticket-generator-liard.vercel.app/)

## Motivation
***
* **React Hook Form** was chosen to minimize unnecessary re-renders, reduce validation computation, and achieve faster component mounting. It provides an intuitive API for managing form state, enabling a consistent and efficient user experience with flexible validation strategies.
* **Zod** was integrated with **React Hook Form Resolvers** to achieve fully type-safe form validation. Error messages are defined directly in the Zod schema, streamlining the validation logic and making it easy to connect with React Hook Form.
* **Resend** and **React Email** were used to deliver clean, responsive email templates built using React components. This allows for dynamic and maintainable email content that closely mirrors the web interface.

## Technologies
***
* Next.js
* React
* TypeScript (ES6)
* HTML5
* Tailwind
* React Hook Form
* React Hook Form Resolvers
* Zod
* Motion
* Resend
* React Email

## Setup
***
* **git clone** {the url to the GitHub repo} or clone your own fork
* **cd** into the new folder
* **npm install**
* To run locally: **npm run dev**