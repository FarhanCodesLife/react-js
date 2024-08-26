import { collection, getDocs,addDoc, query, where } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import {  db,auth, productnumber,userinfo } from "./config.js";
import { onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";




let form = document.querySelector('#form')
let placeholder = document.querySelector('#placeholder')
let textarea =document.querySelector('#textarea')
let bolg = document.querySelector('#newblog')
let avatar = document.querySelector('#avatar')
const logoutBtn = document.querySelector('#logout')


let arr = []
let info 

onAuthStateChanged(auth, (User) => {
    if (User) {
        
        // image.innerHTML =  ` <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                  
                  
        // `
        const uid = User.uid;
        console.log(User);
        info = User
        async function getdata() {
            const q = query(collection(db, "blogs"), where("userid", "==", User.uid));
            // let querySnapshot = await getDocs(collection(db, "blogs"));

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), id:doc.id ,userinfo:userinfo}) 
                console.log(arr);

                productnumber.push(doc.data())
                // console.log(User.length);
                console.log(arr);

                
                
                
                renderproducts(arr)
                
            });



            avatar.innerHTML = `
      <a ><h1 class="text-l rounded-lg border p-2 capitalize">${userinfo[0].firstname}</h1></a>
      
      `
            
            
            
            
         
            
            
        }
        
        
        
  
  
  
  
        getdata()



        
        
        
        
        
        
        
        // ...
    } else {
        alert('please login first then add a new product')
        window.location = "login.html"
    } 
  });
  
  
  
  function signout() {
      
      
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    form.addEventListener('submit',async(event)=>{
      
    event.preventDefault()
    // console.log(placeholder.value);
    // console.log(textarea.value);
   

    async function adddata() {
        
        try {
          const docRef = await addDoc(collection(db, "blogs"), {
            placeholder: placeholder.value,
            textarea: textarea.value,
            userinfo:userinfo,
            // userinfo:userinfo,
            // itemnumber: productnumber.length ,
            // email:userinfo.email,
            userid:info.uid,


          })
            arr.push({
                placeholder: placeholder.value,
                textarea: textarea.value,
                id: docRef.id,
                userinfo:userinfo,
                // email:userinfo.email,
                userid:info.uid,
             });
          console.log("Document written with ID: ", docRef.id);
        //   window.location = 'i.html'
        alert('your product add')
console.log(arr);

        renderproducts(arr)
       
      
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      
      
      
      
      adddata()

    

})
















async function renderproducts(allproducts) {
    // console.log(allproducts);
    bolg.innerHTML = ""
    
    await allproducts.map((element )=>{
        bolg.innerHTML += `
        <div class="border rounded-lg bg-gray-100 mt-5">

                <div class="items-center m-5 justify-center h-[15%] flex" >
                    <div class="w-[5rem]">
                     <img  width="100%"  src="./16.08.2024_09.10.27_REC.png" alt="">
                 </div>
                    <div class="card-body">
                    <h1 class="card-title text-2xl ">
                    ${element.placeholder}
                    </h1>
    
                    <p class="">${element.userinfo[0].firstname} ${element.userinfo[0].lastname}</p>
            
                </div>
            </div>
            <div class="m-5  items-center justify-center">
            <p class ="">${element.textarea}</p>
            
            </div>
           
                </div>
        `
        
   
        logoutBtn.addEventListener('click',()=>{
        
        
            signOut(auth).then(() => {
                // Sign-out successful.
                alert('signout')
                window.location = 'signup.html'
              }).catch((error) => {
                  // An error happened.
                });
            })  
    })
    
    
    
    placeholder.value= ""
    textarea.value= ""
   

    
    
    
    
    
}