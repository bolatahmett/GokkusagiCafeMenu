import firebase from 'firebase/app'
import 'firebase/database';

console.log(JSON.parse(process.env.FIREBASE_CONFIG));
firebase.initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
const database = firebase.database();

export { database };
export default firebase;