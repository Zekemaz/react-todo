import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyBElx_1jcY-xbZkkxqKo6pxfswj6_H4kXw",
    authDomain: "react-todo-521f8.firebaseapp.com",
    databaseURL: "https://react-todo-521f8.firebaseio.com",
    projectId: "react-todo-521f8",
    storageBucket: "react-todo-521f8.appspot.com",
    messagingSenderId: "648191294673",
    appId: "1:648191294673:web:9511c9f8ecd3949c2419f0"

});


export { firebaseConfig as firebase };