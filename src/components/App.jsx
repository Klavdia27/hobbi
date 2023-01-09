import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Sections } from "./pages/Sections.jsx";
import Header from "../components/Header/Header";
import { Contact } from "./pages/Contact.jsx";
import './App.scss';
import { PageCard } from "./pages/PageCard/PageCard";
import Leftaside from "./Leftaside/LeftAside";
import Rightaside from "./Rightaside/Rightaside";
import {Filter} from "./pages/Filter";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <Header/>
        </div>

        <div className="app__container">

          <Leftaside/>

          <main className="app__main"> 

            <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/about'   element={<About/>} />
              <Route path='/sections'   element={<Sections/>} />
              <Route path='/contact'   element={<Contact/>} />
              <Route path='/pagecard/:id'   element={<PageCard/>} />
              <Route path='/:section/:subsection'   element={<Filter/>} />
            </Routes>
          </main>

          <Rightaside/>

        </div>



      </div>
    </BrowserRouter>
  );
}

export default App;

