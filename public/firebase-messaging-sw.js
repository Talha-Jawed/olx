importScripts('https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.1.0/firebase-messaging.js')
var config = {
    apiKey: "AIzaSyAt62kFXbK6qucMtjaWziT1AIVQWaCneGc",
    authDomain: "fir-abcb2.firebaseapp.com",
    databaseURL: "https://fir-abcb2.firebaseio.com",
    projectId: "fir-abcb2",
    storageBucket: "fir-abcb2.appspot.com",
    messagingSenderId: "177768663084"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
