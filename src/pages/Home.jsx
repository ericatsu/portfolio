import React from 'react'
import { useState, useEffect } from 'react';
import { Link  as LinkR} from 'react-router-dom'
// import './Styles/Home.css'
// import Hero from '../assets/hero.JPG';
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        </>
    )
}

export default Home
