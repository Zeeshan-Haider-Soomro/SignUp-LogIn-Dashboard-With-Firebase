import { auth, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail   } from '../firebase.js'

let formField = document.querySelectorAll("form input")

const [userEmail, userPaasword] = formField

let logInBtn = document.getElementById("logInBtn")
const Login = () =>{
    event.preventDefault()
    // logInBtn.innerText = "Loading..."
    if(userEmail.value.trim() === "" && userPaasword.value.trim() === ""){
        Toastify({
            text: "Please fill all fields", 
            duration: 3000,
            position: "center"
        }).showToast();
    }
    else{
        signInWithEmailAndPassword(auth, userEmail.value, userPaasword.value)
        .then((userCredential) => {
            logInBtn.innerText = "Signed in"
            // Signed in 
            const user = userCredential.user;
            Toastify({
                text: "Log In Successfully", 
                duration: 3000,
                position: "center"
            }).showToast();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Toastify({
                text: "Invalid Email and Password", 
                duration: 3000,
                position: "center"
            }).showToast();
        });
        logInBtn.innerText = "Continue"
    }

}
logInBtn.addEventListener("click", Login)

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "../DashBoard/index.html"
    }
  });

  let logInPage = document.getElementById("logInPage");

  const logInpages = () =>{
    window.location.href = "../SignUp/index.html"
  }

  logInPage.addEventListener("click", logInpages)

  let forgotPassword = document.getElementById("forgotPassword")

  const forgetPassword = () =>{
    sendPasswordResetEmail(auth, userEmail.value)
  .then(() => {
    Toastify({
        text: "Password Sent Check Your Email", 
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
  forgotPassword.addEventListener("click", forgetPassword)

