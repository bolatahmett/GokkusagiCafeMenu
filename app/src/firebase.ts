import firebase from 'firebase/app'
import 'firebase/database';

firebase.initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
const database = firebase.database();

export { database };
export default firebase;