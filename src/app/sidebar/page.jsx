"use client";
import React, { useState } from "react";
import "./sidebar.scss";
import Work from "../components/work/page";
import About from "../components/about/page";
import Contact from "../components/contact/page";
function Sidebar() {
  const [isopen, setisopen] = useState(false);
  const [istrue, setistrue] = useState(false);
  const [ispressed, setispressed] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setisopen((prev) => !prev)}>Work</button>
      {
        isopen && (
          <Work/>
        )
      }
      <button onClick={() => setistrue((prev) => !prev)}>About</button>
      {
        istrue && (
          <About/>
        )
      }
      <button onClick={() => setispressed((prev) => !prev)}>Contact</button>
      {
        ispressed && (
          <Contact/>
        )
      }
    </div>
  );
}

export default Sidebar;
