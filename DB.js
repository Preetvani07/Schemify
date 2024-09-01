// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBdUPkhqUyP5za3VA-VU8WqlpV1cOSfX5M",
//   authDomain: "schemify-355e3.firebaseapp.com",
//   databaseURL: "https://schemify-355e3-default-rtdb.firebaseio.com",
//   projectId: "schemify-355e3",
//   storageBucket: "schemify-355e3.appspot.com",
//   messagingSenderId: "788198895785",
//   appId: "1:788198895785:web:7321d320ec0b1e092039b8",
//   measurementId: "G-3VVXKFE0L1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app)

// document.getElementById('submit').addEventListener('click',function(e){
// e.preventDefault();
// set(ref(db, 'userData/' + document.getElementById('username').value),{
//     username: document.getElementById('username').value,
//     age: document.getElementById('age').value,
//     caste: document.getElementById('gen','obc','sc','st').value,
//     state: document.getElementById('state').value,
//     annual_income: document.getElementById('annual-income').value,
//     profession: document.getElementById('prof').value,
//     gender: document.getElementById('m','f','o').value
// })

// })