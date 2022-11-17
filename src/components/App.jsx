import React from "react";
import ItemCard from "./itemCard/ItemCard";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Sections } from "./pages/Sections.jsx";
import Header from "../components/Header/Header";
import { Contact } from "./pages/Contact.jsx";

import AuthContext from "./contexts/AuthContext.js";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <Header/>
        </div>
  
          {/*  <ItemCard/> */}
  
        <main className="app__main container"> 
          <Routes>
          <Route path='/home' exact element={<Home/>} />
          <Route path='/about'   element={<About/>} />
          <Route path='/sections'   element={<Sections/>} />
          <Route path='/contact'   element={<Contact/>} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;

