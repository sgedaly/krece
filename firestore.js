import firebase from './firebase_setup.js';

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
export default firestore;