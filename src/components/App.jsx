import React from "react";
import ItemCard from "./itemCard/ItemCard";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";

import AuthContext from "./contexts/AuthContext.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app container">
        <div>
          {/* <Header/> */}
        </div>
  
        <div className="nav">
          {/* <Nav/> */}
        </div>
        <ItemCard/>
  
        <main className="app__main container"> 
          <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about'   element={<About/>} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;

