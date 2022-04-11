import "./App.css";
import React, { useState } from 'react'; 
import Mockman from "mockman-js";
import Homepage from "./pages/Homepage";
import Labels from "./pages/Labels";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import { Routes, Route } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Sidenav from "./comps/Sidenav";
import { useNote } from "./helpers/context/note-context";

function App() {

  const { utilsState } = useNote();

  return (
    <div className={utilsState.darkTheme ? "App": "App-light App"}>
      <Navbar />
      <Sidenav />

      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/labels" element={<Labels />} />
        <Route path="/archive" element={<Archive />}/>
        <Route path="/trash" element={<Trash />}/>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
