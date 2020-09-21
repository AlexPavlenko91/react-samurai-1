import React from "react";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";

// import Technologies from './Technologies.js';

const App = () => {
  return (
    <div className="app-wraper">
     <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
};

export default App;
