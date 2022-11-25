import React from "react";
import ItemCard from "./ItemCard/ItemCard";
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
import { PageCard } from "./pages/PageCard/PageCard";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <Header/>
        </div>
  
        
  
        <div className="app__container">
          <aside className="aside-left">left aside</aside>
          <main className="app__main"> 
            <Routes>
            <Route path='/home' exact element={<Home/>} />
            <Route path='/about'   element={<About/>} />
            <Route path='/sections'   element={<Sections/>} />
            <Route path='/contact'   element={<Contact/>} />
            <Route path='/pagecard'   element={<PageCard/>} />
            </Routes>
          </main>
          <aside className="aside-right">right aside</aside>
        </div>



      </div>
    </BrowserRouter>
  );
}

export default App;

