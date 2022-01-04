
import { refuge, funTime } from "./export.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { doc, getDoc, collection, getFirestore, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyC6s_8U18Lo6t6OauWP_kpf0y0bpFThCrk",
    authDomain: "csvalidation-e182e.firebaseapp.com",
    projectId: "csvalidation-e182e",
    storageBucket: "csvalidation-e182e.appspot.com",
    messagingSenderId: "351738632285",
    appId: "1:351738632285:web:ae96a0a6d490cd3e5f15b4",
    measurementId: "G-973D5PX7XX"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dc = await getDoc(doc(db, "main", "tasks"));


const idealTasks = {"02_Label":{
    "00" : 100,
    "01" : 0},
    uid: "bruh",
    userName: ""
};

Object.assign(dc.data(),idealTasks);

let task1 = {
    "00": 100,
    "01": 100,
    "02": 100
  }
  
  let task0 = {
    "00": 0,
    "01": 0,
    "02": 0,
    "03": 0
  }
  
  let diff = Object.keys(task1).reduce((diff, key) => {
    if (task0[key] === task1[key]) return diff
    return {
      ...diff,
      [key]: task1[key]
    }
  }, {})
  

console.log(diff);

const docRef = doc(db, "main", "tasks");
// setDoc(docRef, bruh);
// db.collection('main').doc('tasks').set(idealTasks,{merge:true})
