import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgHHZLqTo0L2LpqosLnPrXpnribYP336o",
  authDomain: "very-hot-burgers-ee582.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-ee582-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;