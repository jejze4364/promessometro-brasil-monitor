
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXgu6mz2kQdKFjggNPsCDgynRHK4iyZ4E",
  authDomain: "progressometro.firebaseapp.com",
  projectId: "progressometro",
  storageBucket: "progressometro.firebasestorage.app",
  messagingSenderId: "1096838660938",
  appId: "1:1096838660938:web:457373b2012cf3557437b3",
  measurementId: "G-3J2H1CWQDV"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

export default app;
