
# Chatting Application Readme

## Project Overview

This project is a React-based Chatting Application that allows users to engage in real-time conversations. It offers features like user authentication, real-time chat messaging, and a responsive design for a seamless chatting experience. The application also provides clear documentation on setting up and running the prototype.

## Dependencies

To build and run this project, the following dependencies have been used:

- *firebase* (Version 10.4.0): Firebase is used for real-time database and authentication.
- *react* (Version 18.0.0): The core React library.
- *react-dom* (Version 18.0.0): For rendering React components in the DOM.
- *react-router-dom* (Version 6.3.0): For handling routing within the application.
- *react-scripts* (Version 5.0.1): Provides scripts for building and running the React application.
- *sass* (Version 1.54.8): Used for styling the application with SCSS.
- *uuid* (Version 9.0.1): For generating unique identifiers.
- *web-vitals* (Version 2.1.4): For tracking web performance metrics.

## Features

The Chatting Application boasts several key features:

1. *React Login and Register Page Design*: Provides an intuitive and visually appealing user registration and login experience . A user-friendly interface for real-time chatting.

2. *Sass Responsive Design *: Ensures a responsive layout that adapts to various screen sizes.

3. *React Firebase v9 Authentication  (Login - Register) with email and password *: Implements Firebase authentication for user registration and login securely with their email and password .

4. *React Router Dom Protected Route *: Protects routes from unauthorized access, ensuring security.

5. *Firebase Chat App: Search User*: Allows users to search for other users to start conversations with.

6. *Fetch Chat Conversations*: Retrieves and displays chat conversations in real time. Implements fetching of private chat messages between users.

7. *Firebase realtime database ( Firestore )*: Enables users to send real-time chat messages. Automatically scrolls to the latest message for a seamless chat experience.

## Setting Up and Running the Project

To set up and run this Chatting Application on your local machine, follow these steps:

1. Clone the project repository:
   
   git clone https://github.com/lakshayslayer/Chating-App.git
   

2. Navigate to the project directory:
   
   cd chatting-application
   

3. Install project dependencies using npm or yarn:
   
   npm install
   # or
   yarn install
   

4. Configure Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Set up Firebase Authentication and Realtime Database.
   - Obtain your Firebase configuration credentials (apiKey, authDomain, projectId, etc.) and replace them in the Firebase configuration file (`src/firebase.js`).

5. Start the development server:
   
   npm start
   # or
   yarn start
   

6. Access the application in your browser at `http://localhost:3000`.

## Deployment

The Chatting Application is hosted on the [Vercel](https://vercel.com/) hosting platform. You can access the live project [here](https://chating-app-one.vercel.app/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

This project was created by Lakshay Garg 
College name : IIT ISM Dhanbad

If you have any questions or need assistance, please contact lakshaygarg1612@gmail.com
