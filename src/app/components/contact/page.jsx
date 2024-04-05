
import React, { useState } from 'react'
import Image from 'next/image'
import "./contact.scss"
function Contact({onClose}) {
  return (
    <>
        <div className='_about'>
          <div className='first_Container'>
            <div className='_heading'>
              <h1>Hey There</h1>
              <p>Ask Us Anything!</p>
            </div>
            <button onClick={()=>onClose("contact")}><Image src="./cross.svg" height={40} width={40}/></button> 
          </div>
          <div className='second_Container'>
            <div className='areaof_Experties'>
              <a href='#'>info@studiobgz.com</a>
              <br/>
              <div className="_olu">
                <a href='#'>052.4000900 | </a> 
                <a href='#'>051.4020900</a> 
              </div>
              <br/>
              <div className='tf_Container'>
                <Image src="./facebook.svg" height={40} width={40} />
                <Image src="./instagram.svg" height={35} width={35} />
              </div>
            </div>
            <div className='contact_Form'>
              <div className='name_Email'>
                <input type='text' placeholder='Name' className='_name' />
                <input type='email' placeholder='Email' className='_email'/>
              </div>
              <textarea placeholder='Message'  cols={45} rows={5} className='_Message'/>
              <br/>
              <button className='_send'>Send</button>
            </div>
          </div>
          <div className='third_Container'>
            <Image src="/girl.gif" height={400} width={300} />
            <Image src="/boy.gif" height={400} width={300}/>
          </div>
        </div>       
  </>
      )
  
}

export default Contact