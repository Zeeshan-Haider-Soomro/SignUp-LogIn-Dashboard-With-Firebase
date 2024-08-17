import {auth, signOut, onAuthStateChanged } from '../firebase.js'



let logOutBtn = document.getElementById('logOut');

const logOut = () =>{
    signOut(auth).then(() => {
        Toastify({
            text: errorMessage, 
            duration: 3000,
            position: "center"
            }).showToast();

      }).catch((error) => {
        Toastify({
            text: error, 
            duration: 3000,
            position: "center"
            }).showToast();
      });
}

logOutBtn.addEventListener('click', logOut);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "../LogIn/index.html"
    }
  });