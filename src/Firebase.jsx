import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBICzunDPoYLhe-6OD_hUdi3Bfs6PigW1s",
  authDomain: "crudreactfirebase-83724.firebaseapp.com",
  databaseURL: "https://crudreactfirebase-83724.firebaseio.com",
  projectId: "crudreactfirebase-83724",
  storageBucket: "crudreactfirebase-83724.appspot.com",
  messagingSenderId: "583229562022",
  appId: "1:583229562022:web:981b6ac7ab52603362e867"};
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
