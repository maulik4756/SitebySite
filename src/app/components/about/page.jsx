"use client"
import React, { useState } from 'react'
import "./about.scss"
function About() {
  const [isVisible,setIsVisible] = useState(true)
  return (
    <>
      { isVisible &&
        <div className='about'>
          <div className='firstContainer'>
            <div className='heading'>
              <h1>About The Studio</h1>
              <button onClick={()=>setIsVisible((prev)=>!prev)}>Close</button>
            </div>
            <div className='description'>
              STUDIO BAGAZ' is a graphic design studio based in Tel Aviv,
              founded by Nati Shimony & Ronli Pe'er, focusing on experiential design, branding, digital and life style.
              We believe in great, uncompromising and limitless design, with a diverse portfolio of work and family of clients
              , in the arts, cultural, culinary, fashion, education
              and corporate sectors, brought together by a shared desire to make the world a better place through design
            </div>
            <br />
            <br/>
            <hr/>
          </div>
          <div className='secondContainer'>
            <div className='areaofExperties'>
              <h1>What We Do:</h1>
              <p>Brand Development</p>
              <p>Visual Identity Strategy</p>
              <p>Art Direction</p>
              <p>Production</p>
              <p>Packaging Design</p>
              <p>Advertising Campaigns</p>
              <p>Motion Graphics</p>
              <p>UI  UX</p>
              <p>Digital & Social</p>
              <br/>
              <p>And All The Things That You Didn't Think Of.</p>
            </div>
            <div className='contactForm'>
              <h1>Contact Us:</h1>
              <div className='nameEmail'>
                <input type='text' placeholder='Name' className='name' />
                <hr/>
                <input type='email' placeholder='Email' className='email'/>
                <hr/>
              </div>
              <textarea placeholder='Message' cols={25} rows={5} className='Message'/>
              <br/>
              <button className='send'>Send</button>
            </div>
          </div>
          <div className='thirdContainer'></div>
        </div>
      }
  </>
      )
  
}

export default About