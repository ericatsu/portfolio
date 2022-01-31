import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavBarContainter, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavResume} from '../elements/NavBarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ( {toggle} ) => {

    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
          setscrollNav(true)
        } else {
          setscrollNav(false)
        }
    }

    useEffect(() => {
     window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
     <>
    <IconContext.Provider value={{color: '#ffff'}}>
     <Nav scrollNav={scrollNav}>
        <NavBarContainter>
        <NavLogo to="/" onClick={toggleHome}>CleanIt</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon >
        <NavMenu>
            <NavItem>
                <NavLinks to="/" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Home</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="About" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>About Us</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Skills" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Company</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Services" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Services</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Works" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Our Blog</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>FAQs</NavLinks>
            </NavItem>
            {/* <NavItem>
                <NavResume to="Resume" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Resume</NavResume>
            </NavItem> */}
        </NavMenu>
        <NavBtn>
             <NavBtnLink to='HireMe'>Contact Phone</NavBtnLink>
         </NavBtn>
        </NavBarContainter>
     </Nav>
</IconContext.Provider>
     </>
    );
}

export default NavBar
