"use client";
import React, { useState } from "react";
import "./sidebar.scss";
import Work from "../components/work/page";
import About from "../components/about/page";
import Contact from "../components/contact/page";
function Sidebar() {
  const [isVisibleObj, setIsVisibleObj] = useState({
    work: false,
    about: false,
    contact: false
  })
  function visiblePerticularSidebar(name){
    setIsVisibleObj({...isVisibleObj , [name]: !isVisibleObj?.[name]})
  }
  return (
    <div className="container">
      <button onClick={() => visiblePerticularSidebar("work")}>Work</button>
      {
        isVisibleObj?.work && (
          <Work onClose={ visiblePerticularSidebar} />
        )
      }
      <button onClick={() => visiblePerticularSidebar("about")}>About</button>
      {
        isVisibleObj?.about && (
          <About  onClose={ visiblePerticularSidebar}/>
        )
      }
      <button onClick={() => visiblePerticularSidebar("contact")}>Contact</button>
      {
        isVisibleObj?.contact && (
          <Contact onClose={ visiblePerticularSidebar}/>
        )
      }
    </div>
  );
}

export default Sidebar;
