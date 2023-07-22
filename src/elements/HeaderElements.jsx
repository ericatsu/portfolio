import styled from 'styled-components';
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseLine, RiPhoneLine } from 'react-icons/ri';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 54px;
    max-width: 1100px;
`;

export const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  justify-self: flex-start;
  align-items: center;
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 400px;
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1e90ff;
  }

  &.active {
    color: #1e90ff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HireMeButton = styled.button`
  background-color: #1e90ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.0rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 10px; 

  &:hover {
    background-color: #4fb9ffcf;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CallButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;

  &:hover {
    background-color: #0099ff;
    border-radius: 10px;
    padding: 10px 18px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const PhoneIcon = styled(RiPhoneLine)`
  font-size: 20px;
  margin-right: 8px;
`;

export const MobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  outline: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseIcon = styled(RiCloseLine)`
  font-size: 24px;
`;

export const MenuIcon = styled(RiMenuLine)`
  font-size: 24px;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  width: 70%;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  transform: translateX(30%); /* Translate to right to position it correctly */

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuItem = styled(Link)`
   font-size: 1.2rem;
  margin-bottom: 20px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1e90ff;
  }

  &.active {
    color: #1e90ff;
  }
`;