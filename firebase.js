import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ailetter-base.firebaseapp.com",
    projectId: "ailetter-base",
    storageBucket: "ailetter-base.appspot.com",
    messagingSenderId: "451985534229",
    appId: "1:451985534229:web:a05ee23d439a0948a60d1c",
    measurementId: "G-NTQGDJVB2P"
};

const firebaseApp = initializeApp(firebaseConfig);

let analytics;
if (firebaseApp.name && typeof window !== 'undefined') {
    analytics = getAnalytics(firebaseApp);
}
const db = getFirestore(firebaseApp);

export { analytics };
export default db;