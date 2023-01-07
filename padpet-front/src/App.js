import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./domain/home/index"
import ButtonAppBar from './domain/interface/AppBar'
import UserRegister from './domain/user/UserRegister'
import UserProfile from "./domain/user/UserProfile";
function App() {
  //Rotas
  return(
    <>
    <ButtonAppBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register-user" element={<UserRegister  />}/>
        <Route path="/user-profile" element={<UserProfile  />}/>
      </Routes>
    </Router>
  </>
  )
};

export default App;
