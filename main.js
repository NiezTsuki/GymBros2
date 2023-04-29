import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/logincheck.js";
import { setupPosts } from "./app/postList.js";

import './app/registrar.js'
import './app/iniciarsesion.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import './app/cerrarsesion.js'
import './app/postList.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  }
});