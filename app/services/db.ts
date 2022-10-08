import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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

  const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        // if(querySnapshot.empty){
        //   return false;
        // } else {
        //   return true;
        // }
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }