import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Home.css'
import Hero from '../assets/hero.JPG';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
              <h1>
                  <p>Hi,</p>
                  <p>I am Eric</p>
                  <p>A Software Developer</p>
              </h1>
              <Link to="/">
                  <button className="hire">Hire Me</button>
                  <a href="#" download="#resume">
                      <button className="resume">
                          Get Resume
                      </button>
                  </a>
              </Link>
            </div>
            <div className="person">
                <img src={Hero} alt="person picture"/>
            </div>
        </div>
    )
}

export default Home
