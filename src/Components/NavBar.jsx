import React from 'react';
// import { useState, useEffect } from 'react';
// import { Link as LinkR, useLocation } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import { Nav, NavBarContainter, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from '../elements/NavBarElements';



const NavBar = () => {
    return(
     <>
     <Nav>
        <NavBarContainter>
        <NavLogo>lester</NavLogo>
        <MobileIcon>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="Service">Service</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Skills">Skills</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/Contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Works">Works</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="About">About</NavLinks>
            </NavItem>
        </NavMenu>
         <NavBtn>
             <NavBtnLink to='/HireMe'>Hire Me</NavBtnLink>
         </NavBtn>
        </NavBarContainter>
     </Nav>
     </>
    );
}

export default NavBar
