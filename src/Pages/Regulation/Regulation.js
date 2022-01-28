import React from "react";
import "./Regulation.css";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Regulation() {
    const [user] = useAuthState(auth);
    const replace = useNavigate();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
          replace("/");
        }
      }
      
  return (
    <div className="regulation">
        <button onClick={handleAuthenticaton}>Log out</button>
    </div>
  );
}

export default Regulation;
