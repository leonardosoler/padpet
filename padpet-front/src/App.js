import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home"
import ButtonAppBar from './components/interface/app_bar'

function App() {
  //Rotas
  return(
    <>
    <ButtonAppBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  </>
  )
};

export default App;
