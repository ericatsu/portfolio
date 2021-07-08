import React from 'react'
import { useState } from 'react';
//import { Link  as LinkR} from 'react-router-dom'
// import './Styles/Home.css'
// import Hero from '../assets/hero.JPG';
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Works from '../Components/Works';
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Hero/>
        <About {...homeObjOne}/>
        <Skills {...homeObjTwo} />
        <Works {...homeObjThree} />
        </>
    )
}

export default Home
