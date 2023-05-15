import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavBarContainter, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';
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
        <NavLogo to='/' onClick={toggleHome}>lester</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon >
        <NavMenu>
            <NavItem>
                <NavLinks to="About" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Skills" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Skills</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Services" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}
                containerId='services'>Service</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Works" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Works</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Contact" smooth={true}
                duration={500} spy={true}
                exact='true' offset={-80}>Contact</NavLinks>
            </NavItem>
        </NavMenu>
         <NavBtn>
             <NavBtnLink to='/HireMe'>Hire Me</NavBtnLink>
         </NavBtn>
        </NavBarContainter>
     </Nav>
</IconContext.Provider>
     </>
    );
}

export default NavBar