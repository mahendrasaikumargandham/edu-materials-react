import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjBF1BNbAo2N-9vNo2v72rj2c9KAD2bbc",
    authDomain: "edu-materials-a7876.firebaseapp.com",
    projectId: "edu-materials-a7876",
    storageBucket: "edu-materials-a7876.appspot.com",
    messagingSenderId: "195338539379",
    appId: "1:195338539379:web:d94cb9d339f7ed891fb506",
    measurementId: "G-XWNLM8KJ1W"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async() => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        const query = await db
          .collection("users")
          .where("uid", "==", user.uid)
          .get();
        if (query.docs.length === 0) {
          await db.collection("users").add({
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
          });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


const githubProvider = new firebase.auth.GithubAuthProvider();
const signInWithGithub = async () => {
    try {
      const res = await auth.signInWithPopup(githubProvider);
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "github",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

const logout = () => {
    auth.signOut();
};

export {
    auth,
    db,
    signInWithGoogle,
    signInWithGithub,
    logout,
  };