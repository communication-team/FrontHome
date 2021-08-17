
import firebase from 'firebase'
import 'firebase/storage'



let app;

if (!firebase.apps.length) {

  app=firebase.initializeApp({
    "projectId": "cars-8ba21",
    "appId": "1:446121828324:web:8adcae85ffdf4aff52b1f1",
    "databaseURL": "https://cars-8ba21-default-rtdb.firebaseio.com",
    "storageBucket": "cars-8ba21.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyCpMROBvWibViaAFVz1B9Zq9WBCKhIWIXQ",
    "authDomain": "cars-8ba21.firebaseapp.com",
    "messagingSenderId": "446121828324",
    "measurementId": "G-LJPPHLKK0E"
  });
}else {
   app=firebase.app(); // if already initialized, use that one
}

export {app};
