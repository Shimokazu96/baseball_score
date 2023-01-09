import { initializeApp, getApps } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCYLQMYd5UqQPdjzV0YB7EKpo-SfRZZlYY',
    authDomain: 'baseball-score-37.firebaseapp.com',
    projectId: 'baseball-score-37',
    storageBucket: 'baseball-score-37.appspot.com',
    messagingSenderId: '50852804478',
    appId: '1:50852804478:web:bfd8c1c9b47b41a4d4652f',
    measurementId: 'G-0KX877536W',
};
const apps = getApps();

const firebaseApp = !apps.length && typeof window !== "undefined" ? initializeApp(firebaseConfig) : apps[0];

// export const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp, {});
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export const funcions = getFunctions();
