import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/index"
import ButtonAppBar from './interface/AppBar';
import UserRegister from './pages/user/UserRegister';
import UserProfile from "./pages/user/UserProfile";
import PetRegister from "./pages/pet/PetRegister";
import LocalRegister from "./pages/local/LocalRegister";

function App() {
  //Rotas
  return(
    <>
    <ButtonAppBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register-user" element={<UserRegister  />}/>
        <Route path="/register-pet" element={<PetRegister  />}/>
        <Route path="/register-local" element={<LocalRegister  />}/>
        <Route path="/user-profile" element={<UserProfile  />}/>
      </Routes>
    </Router>
  </>
  )
};

export default App;
