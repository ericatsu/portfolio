import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {  CloseIcon, HeaderContainer, HeaderWrapper, HireMeButton, Logo, MenuIcon, MobileMenu, MobileMenuButton, MobileMenuItem, NavItem, NavMenu} from '../elements/HeaderElements';

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
      <HeaderContainer>
      <Logo
        onClick={() => scroll.scrollToTop()}
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        offset={-60}
      >
        EA Auto
      </Logo>
      <NavMenu>
      <NavItem
                to="About"
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
      to="Skills"
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
      to="Projects"
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
      to="Contact"
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
      <HireMeButton onClick={openHireMeDialog}>Hire Me</HireMeButton>
      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </MobileMenuButton>
      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuItem
            to="About"
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
            to="Skills"
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
            to="Contact"
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
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
