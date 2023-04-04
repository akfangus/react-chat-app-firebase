import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA35QMcXZ1mAPZGciiamUCPMWzGm53Gd5s",
  authDomain: "chat-ad0d8.firebaseapp.com",
  projectId: "chat-ad0d8",
  storageBucket: "chat-ad0d8.appspot.com",
  messagingSenderId: "206133617528",
  appId: "1:206133617528:web:c2307a9101db02ee381e8d",
};

//create a app reference
export const app = initializeApp(firebaseConfig);
//create a auth reference
export const auth = getAuth();
//create a storage reference
export const storage = getStorage();
//create a database reference
export const db = getFirestore();
