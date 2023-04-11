import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./components/home/index"
import ButtonAppBar from './components/interface/AppBar'
import UserRegister from './components/user/UserRegister'
import UserProfile from "./components/user/UserProfile";
import PetRegister from "./components/pet/PetRegister";
import LocalRegister from "./components/local/LocalRegister";
import PetList from "./components/pet/PetList";

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
        <Route path="/pet" element={<PetList  />}/>
        <Route path="/register-local" element={<LocalRegister  />}/>
        <Route path="/user-profile" element={<UserProfile  />}/>
      </Routes>
    </Router>
  </>
  )
};

export default App;
