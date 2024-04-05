"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import "./work.scss"

const workObject = [
        {
            path: "/work/1.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/2.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/8.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/4.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/6.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/7.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/9.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/10.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/11.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/12.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/13.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/14.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/15.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/16.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/17.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/18.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/19.webp",
            desc: "Maccabi Tzair"
        },
        {
            path: "/work/20.webp",
            desc: "Maccabi Tzair"
        },
    ];

function Work({onClose}) {
    
    return (
    
        <div div className='work' >
            <div className='random'>
                <p></p>
                <h1>Work</h1>
                <button onClick={()=>onClose("work")}><Image src="./cross.svg" height={40} width={40}/></button>
            </div>
            <div className='workContainer'  >
                {workObject.map((obj,index) => {
                    return (
                        <div className='imgContainer' key={index}>
                            <Image src={obj.path} height={300} width={300} alt='' />
                            <p>{obj.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
              
  )
}

export default Work