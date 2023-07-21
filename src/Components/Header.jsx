import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { CallButton, CloseIcon, HeaderWrapper, HireMeButton, Logo, MenuIcon, MobileMenu, MobileMenuButton, MobileMenuItem, NavItem, NavMenu, PhoneIcon } from '../elements/HeaderElements';


const Header = ({ openHireMeDialog }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Logo onClick={() => scroll.scrollToTop()} 
      to="top"
     spy={true}
     smooth={true}
  duration={500}
  offset={-60}>
        EA
      </Logo>
      <NavMenu>
        <NavItem
                to="about"
      spy={true}
      smooth={true}
      duration={500}
      offset={-60}
      activeClass="active"
      onClick={closeMobileMenu}
    >
      About
    </NavItem>
    <NavItem
      to="skills"
      spy={true}
      smooth={true}
      duration={500}
      offset={-60}
      activeClass="active"
      onClick={closeMobileMenu}
    >
      Skills
    </NavItem>
    <NavItem
      to="projects"
      spy={true}
      smooth={true}
      duration={500}
      offset={-60}
      activeClass="active"
      onClick={closeMobileMenu}
    >
      Projects
    </NavItem>
    <NavItem
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      offset={-60}
      activeClass="active"
      onClick={closeMobileMenu}
    >
      Contact
    </NavItem>
  </NavMenu>
  <HireMeButton onClick={openHireMeDialog}>  Hire Me</HireMeButton>
  <CallButton>
        <PhoneIcon />
        Call
      </CallButton>
  <MobileMenuButton onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
  </MobileMenuButton>
  {isMobileMenuOpen && (
    <MobileMenu>
      <MobileMenuItem
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        offset={-60}
        activeClass="active"
        onClick={closeMobileMenu}
      >
        About
      </MobileMenuItem>
      <MobileMenuItem
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        offset={-60}
        activeClass="active"
        onClick={closeMobileMenu}
      >
        Skills
      </MobileMenuItem>
      <MobileMenuItem
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        offset={-60}
        activeClass="active"
        onClick={closeMobileMenu}
      >
        Projects
      </MobileMenuItem>
      <MobileMenuItem
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={-60}
        activeClass="active"
        onClick={closeMobileMenu}
      >
        Contact
      </MobileMenuItem>
    </MobileMenu>
  )}
</HeaderWrapper>
);
};

export default Header;


