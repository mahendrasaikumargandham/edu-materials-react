import React from "react";
import "./Regulation.css";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

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
        <button onClick={handleAuthenticaton}>LogOut</button>
        <section>
        <div className="container">
            <div className="card">
                <div className="content">
                    <h2>R16</h2>
                    <div className="contentBox">
                        <span><Link to="/regulation/r16-syllabus">Enter</Link></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2>R19</h2>
                    <div className="contentBox">
                        <span><Link to="/regulation/r19-syllabus">Enter</Link></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2>R20</h2>
                    <div className="contentBox">
                        <span><Link to="/regulation/r20-syllabus">Enter</Link></span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  );
}

export default Regulation;
