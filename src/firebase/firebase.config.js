// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAOQDG25NRHWmod06rCGwysopUeJ5JGbB4',
  authDomain: 'studymate-5492d.firebaseapp.com',
  projectId: 'studymate-5492d',
  storageBucket: 'studymate-5492d.firebasestorage.app',
  messagingSenderId: '197812337492',
  appId: '1:197812337492:web:bf064614d9da9a75f2e6c1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
