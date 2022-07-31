import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import firebaseAnalytics from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   // databaseURL: process.env.REACT_APP_DB,
//   projectId: process.env.REACT_APP_PID,
//   storageBucket: process.env.REACT_APP_SB,
//   messagingSenderId: process.env.REACT_APP_SID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MID
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebaseAnalytics.getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
