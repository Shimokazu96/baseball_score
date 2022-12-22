import firebase from "firebase/app";

import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyCYLQMYd5UqQPdjzV0YB7EKpo-SfRZZlYY",
    authDomain: "baseball-score-37.firebaseapp.com",
    projectId: "baseball-score-37",
    storageBucket: "baseball-score-37.appspot.com",
    messagingSenderId: "50852804478",
    appId: "1:50852804478:web:bfd8c1c9b47b41a4d4652f",
    measurementId: "G-0KX877536W"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const analytics = getAnalytics();
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const funcions = getFunctions();