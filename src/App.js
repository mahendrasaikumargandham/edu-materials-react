import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './Main';
import Login from './Pages/Login/Login';
import Regulation from './Pages/Regulation/Regulation';
import SyllabusR20 from './Pages/R20/Syllabus/SyllabusR20';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/regulation" element={<Regulation/>}></Route>
          <Route path="/regulation/r20-syllabus" element={<SyllabusR20/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
