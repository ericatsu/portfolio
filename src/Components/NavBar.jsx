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
     return () => {
       window.removeEventListener('scroll', changeNav)
     }
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
     <>
    <IconContext.Provider value={{color: '#ffff'}}>
     <Nav scrollNav={scrollNav} className={`transition-all duration-500 ease-in-out ${scrollNav ? 'backdrop-blur-md bg-black/80' : 'bg-transparent'}`}>
        <NavBarContainter className="max-w-6xl mx-auto px-4">
        <NavLogo 
          to="/" 
          onClick={toggleHome} 
          className="text-2xl font-bold tracking-wider hover:text-green-400 transition-colors duration-300"
        >
          <span className="text-green-400">e</span>kaa
        </NavLogo>
        <MobileIcon onClick={toggle} className="transition-transform hover:scale-110 active:scale-95">
            <FaBars />
        </MobileIcon>
        <NavMenu className="space-x-1">
            <NavItem>
                <NavLinks 
                  to="About" 
                  smooth={true}
                  duration={500} 
                  spy={true}
                  exact='true' 
                  offset={-80}
                  className="hover:text-green-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-400 after:transition-all after:duration-300"
                >
                  About
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks 
                  to="Skills" 
                  smooth={true}
                  duration={500} 
                  spy={true}
                  exact='true' 
                  offset={-80}
                  className="hover:text-green-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-400 after:transition-all after:duration-300"
                >
                  Skills
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks 
                  to="Services" 
                  smooth={true}
                  duration={500} 
                  spy={true}
                  exact='true' 
                  offset={-80}
                  className="hover:text-green-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-400 after:transition-all after:duration-300"
                >
                  Services
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks 
                  to="Works" 
                  smooth={true}
                  duration={500} 
                  spy={true}
                  exact='true' 
                  offset={-80}
                  className="hover:text-green-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-400 after:transition-all after:duration-300"
                >
                  Works
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavResume 
                  to="Resume" 
                  smooth={true}
                  duration={500} 
                  spy={true}
                  exact='true' 
                  offset={-80}
                  className="hover:text-green-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-400 after:transition-all after:duration-300"
                >
                  Resume
                </NavResume>
            </NavItem>
        </NavMenu>
         <NavBtn>
             <NavBtnLink 
               to='HireMe' 
               className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
             >
               Contact
             </NavBtnLink>
         </NavBtn>
        </NavBarContainter>
     </Nav>
</IconContext.Provider>
     </>
    );
}

export default NavBar
