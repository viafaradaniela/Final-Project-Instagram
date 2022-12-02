var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDSK6JaFe5hZ5f4b4ryu9yM1QT91dS6pZo",
    authDomain: "dcatest-ef7b9.firebaseapp.com",
    projectId: "dcatest-ef7b9",
    storageBucket: "dcatest-ef7b9.appspot.com",
    messagingSenderId: "121773818997",
    appId: "1:121773818997:web:90dd57d683ca04284b243c",
    measurementId: "G-PELHX9R1QN"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "usuarios");
const NewPost = collection(db, "NewPost");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        // if(querySnapshot.empty){
        //   return false;
        // } else {
        //   return true;
        // }
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "usuarios"), {
            email,
            password
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const listenPost = (cb) => {
    try {
        onSnapshot(collection(db, "NewPost"), (documentos) => {
            const post = documentos.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
            cb(post);
        });
    }
    catch (error) {
    }
};
export const getPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Crear arreglo
        const post = [];
        //Hacer la petición a la base de datos a mi colección de post
        const q = query(NewPost);
        const querySnapshot = yield getDocs(q);
        //Desglosar los documentos de forma individual y guardarlos en el arreglo
        querySnapshot.forEach(doc => {
            post.push({ id: doc.id, data: doc.data() });
        });
        return post;
    }
    catch (error) {
    }
});
export const addPost = ({ caption, image }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "NewPost"), {
            caption,
            image
        });
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
