import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    updateDoc,
    doc,
    query,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWQazSATKp08AmFQlTFk8ZJD1tQRwrm4I",
    authDomain: "shop-tb-sv2.firebaseapp.com",
    projectId: "shop-tb-sv2",
    storageBucket: "shop-tb-sv2.appspot.com",
    messagingSenderId: "936586335230",
    appId: "1:936586335230:web:da134955fd2ced6165e6af"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    updateDoc,
    doc,
    query,
    orderBy,
    serverTimestamp
};
