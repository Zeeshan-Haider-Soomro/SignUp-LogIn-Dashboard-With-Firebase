import {auth, createUserWithEmailAndPassword, onAuthStateChanged } from '../firebase.js'

let formField = document.querySelectorAll("form input")

const [name, userEmail, userPaasword, gender] = formField

let signUpBtn = document.getElementById("signUpBtn")
const signUp = () =>{
    event.preventDefault()
    signUpBtn.innerText = "Loading..."
    if(name.value.trim() === "" && userEmail.value.trim() === "" && userPaasword.value.trim() === "" && gender.value.trim() === ""){
      Toastify({
        text: "All Fields are Required", 
        duration: 3000,
        position: "center"
      }).showToast();
    }
    else{
      createUserWithEmailAndPassword(auth, userEmail.value, userPaasword.value)
      .then((userCredential) => {
      signUpBtn.innerText = "Signed up"
      // Signed up 
      const user = userCredential.user;
      Toastify({
        text: "Sign Up Successfully", 
        duration: 3000,
        position: "center"
      }).showToast();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Toastify({
          text: errorMessage, 
          duration: 3000,
          position: "center"
        }).showToast();
      });
    }
    signUpBtn.innerText = "Continue"

}

signUpBtn.addEventListener("click", signUp)

onAuthStateChanged(auth, (user) => {
  if (user) {
      window.location.href = "../DashBoard/index.html"
  }
});

let signuppage = document.getElementById("signuppage");

const signuppages = () =>{
  window.location.href = "../LogIn/index.html"
}

signuppage.addEventListener("click", signuppages)



