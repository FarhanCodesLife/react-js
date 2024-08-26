import { initializeApp,getApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,onAuthStateChanged ,signOut} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore,query,collection,where, getDocs} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";





const firebaseConfig = {
  apiKey: "AIzaSyC_9apK83zu1X6dhVsKozMjPrJj8_6YmGE",
  authDomain: "bloging-app-by-farhan.firebaseapp.com",
  projectId: "bloging-app-by-farhan",
  storageBucket: "bloging-app-by-farhan.appspot.com",
  messagingSenderId: "615288019917",
  appId: "1:615288019917:web:7dd9da3f4ea875ca170284",
  measurementId: "G-LCKVD9RTM9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  
export let productnumber = []
export const db = getFirestore(app);
 const firebaseApp = getApp();





 export let userinfo = []

 onAuthStateChanged(auth, (User) => {
    if (User) {
        // image.innerHTML =  ` <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                  
                  
        // `
        const uid = User.uid;
        console.log(User);
        
        async function getdata() {
            const q = query(collection(db, "user"), where("uid", "==", User.uid));
            // let querySnapshot = await getDocs(collection(db, "blogs"));

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                userinfo.push({...doc.data(),}) 
                console.log(userinfo);

            //   renderproducts(userinfo)
  
  
           
        });
        
        
        
        
        
        
        }
  
        getdata()
  
  


  
       




  
        // ...
    } else {
//   alert('please login first then add a new product')
    //   window.location = "login.html"
    } 





  });
