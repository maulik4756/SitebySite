"use client";
import React, { useState, useEffect } from "react";
import "./main.scss";
import Image from "next/image";

function Mypage() {
  const getPicture = (index) => {
    switch (index) {
      case 1:
        return "/earing.webp";

      case 2:
        return "/ring.webp";

      case 3:
        return "/pandent.webp";
    }
  };
  const getPicture2 = (index) => {
    switch (index) {
      case 1:
        return "/chef.webp";

      case 2:
        return "/rolls.webp";

      case 3:
        return "/foodside.webp";
    }
  };
  const NUMBER_OF_PICTURES = 1;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        index == NUMBER_OF_PICTURES ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => {
      /* cleanup */
      clearInterval(timer);
    };
    /* on component render*/
  }, []);
  return (
    <div className="outer">
      <p className="logo">SiteBySite</p>
      <div className="inner">
        <div className="first">
          <p className="desc">
            Hi! We Are Studio SiteBySite' As visual storytellers we transform
            any concept into a unique visual language with a little bit of magic
            & fairy dust
          </p>
        </div>
      </div>
      <div className="second">
        <div className="sFirst">
         <h1 className="sFirsthead">Oak &Luna</h1>
          <a href="#"><Image src={getPicture(index)} alt="" height={500} width={400} className="earing" /></a>
        </div>
        <div className="sSecond">
          <Image src="/sideimg.webp" height={500} width={400} alt=""/>
        </div>
      </div>
      <div className="third">
        <div className="thirdContainer">
          <a href="#"><Image src="/mobile.webp" alt="" height={700} width={600} /></a>
          <a href="#"><h1>Walla shops</h1></a>
        </div>
        <p>App Design | UI | UX</p>
      </div>
      <div className="fourth">
        <div className="ffContainer">
          <a href="#"> <Image src="/jacki.webp" alt="" height={400} width={300} /></a>
        </div>
        <div className="fsContainer">
            <a href="#"><Image src="/bhuka.webp" alt="" fill/></a>
        </div>
      </div>
      <div className="fifth">
        <a href="#"><Image src="/food.webp" height={900} width={700} alt="" /></a>
        <div >
          <p>Visual Identity</p>
          <h1>Japo</h1>
          <a href="#"><Image src={getPicture2(index)} height={350} width={250} alt="" /></a>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
