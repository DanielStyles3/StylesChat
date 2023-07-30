import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Chats from "./Component/Chats";
import Login from "./Component/Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
           <Routes> 
          <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Chats />} />

           </Routes> 
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
