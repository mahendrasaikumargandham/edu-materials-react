import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './Main';
import Login from './Pages/Login/Login';
import Regulation from './Pages/Regulation/Regulation';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/regulation" element={<Regulation/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
