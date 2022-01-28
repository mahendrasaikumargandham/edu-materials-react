import React from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { auth, signInWithGoogle, signInWithGithub } from "../../firebase";
console.log(auth);
function Login() {
  const [user, loading, error] = useAuthState(auth);
  const replace = useNavigate();
  console.log(error);
    useEffect(() => {
        if (loading) return;
        if (user) replace("/regulation");
    }, [user, loading, replace]);
  return (
    <div className="login">
        <button className="login_button" onClick={signInWithGoogle}>Login with Google</button>
        <button className="login_button" onClick={signInWithGithub}>Login with GitHub</button>
    </div>
  );
}

export default Login;
