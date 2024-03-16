import React, { useState } from "react";
import "./Home.css";
import "../App.css";
import logo from "../images/logo.png";
import mobilePic from "../images/mobile.png"
import {SlideInLeft, SlideInRight, RotateCcw } from 'react-animated-components'

export const Home=()=>{
    const [mobile,setMobile]=useState(false);
    const navbarForMobile=()=>{
        return (<div className="navbarformobile">
            <a href="#Home" onClick={()=>setMobile(!mobile)}><li className="nav__items mx__15">Home</li></a>
            <a href="#About" onClick={()=>setMobile(!mobile)}><li className="nav__items mx__15">About</li></a>
            <a href="#Skills" onClick={()=>setMobile(!mobile)}><li className="nav__items mx__15">Skills</li></a>
            <a href="#Project" onClick={()=>setMobile(!mobile)}><li className="nav__items mx__15">Projects</li></a>
            <a href="#Contact" onClick={()=>setMobile(!mobile)}><li className="nav__items mx__15">Contact</li></a>
        </div>)
    }
    return (
        <div className="home" id="Home">
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy__30 navigation">
                    <div className="logo">
                        <RotateCcw durationMs={8000}>
                            <img src={logo} alt=""/>
                        </RotateCcw>                        
                    </div>
                    <div className="pxy__30">
                        <ul className="navbar d__flex">
                            <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                            <a href="#About"><li className="nav__items mx__15">About</li></a>
                            <a href="#Skills"><li className="nav__items mx__15">Skills</li></a>
                            <a href="#Project"><li className="nav__items mx__15">Projects</li></a>
                            <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
                        </ul>
                    </div>                    
                    
                </div>                
                <div className="container">
                    <div className="home_content">
                        <img id="contents"src={mobilePic} alt="contents"onClick={()=>{setMobile(!mobile)}}/>
                        <SlideInLeft durationMs={1000}>
                            <h1 className="home_line1 pz__10">Hi, I am Amit Jangid {mobile?navbarForMobile():null}</h1>
                        </SlideInLeft>
                        <SlideInRight durationMs={1000}>
                        < h3 className = "home_line2 pz__10" > Software Developer </h3>
                        </SlideInRight>
                    </div>
                </div>
            </div>
        </div>
    )
}