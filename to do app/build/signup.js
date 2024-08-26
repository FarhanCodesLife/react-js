
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth ,db } from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 



let form = document.querySelector('#form')
let firstname =document.querySelector('#firstName')
let lastname =document.querySelector('#lastName')
let email =document.querySelector('#email')
let password =document.querySelector('#password')
// let userimage =document.querySelector('#userimage')
// userimage


console.log('ok bhi jan');





form.addEventListener('submit',(event)=>{
  event.preventDefault()
  
  console.log(firstname.value);
  console.log(lastname.value);
  console.log(password.value);
  console.log(email.value);
  
//   console.log(userimage);

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user.id);
    alert('register done')
    
    async function adddata() {
      
      try {
        const docRef = await addDoc(collection(db, "user"), {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          // userimage: userimageurl,
          uid: user.uid,
          // userinfo:user
        });
        console.log("Document written with ID: ", docRef.id);
        window.location = 'login.html'
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    
    
    
    
    adddata()

    // window.location = 'login.html'

    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });


































  
//   let userimageurl = await showUrl(userimage)



// createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     let newuser = user
//     // console.log(user.uid);

//     // async function adddata() {
      
//     //   try {
//     //     const docRef = await addDoc(collection(db, "user"), {
//     //       firstname: firstname.value,
//     //       lastname: lastname.value,
//     //       email: email.value,
//     //       userimage: userimageurl,
//     //       uid: user.uid
//     //     });
//     //     console.log("Document written with ID: ", docRef.id);
//     //     window.location = 'login.html'
//     //   } catch (e) {
//     //     console.error("Error adding document: ", e);
//     //   }
//     // }
    
    
    
    
//     // adddata()
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // console.log(errorMessage);
    
//   });

  
  
})



// async function showUrl(profile) {
//   const files = profile.files[0]
//   const storageRef =  ref(storage, email.value);


//   try {
//       const uplordimage = await uploadBytes(storageRef, files);
//       const url = await getDownloadURL(storageRef);
//       console.log(url);
//       return url
    
//   } catch (error) {
//     console.log(error);
    
//   }
    
// }

// export newuser


// export let arr ={
//   firstname: firstname.value,
//   lastname: lastname.value,
//   email: email.value,
//   userimage: userimageurl,
// }
