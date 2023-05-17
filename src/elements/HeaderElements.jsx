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
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }

  &.active {
    color: #ff6b6b;
  }
`;

export const HireMeButton = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4f4f;
  }
`;

export const CallButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
`;

export const PhoneIcon = styled(RiPhoneLine)`
  font-size: 18px;
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
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuItem = styled(Link)`
  margin-bottom: 10px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }

  &.active {
    color: #ff6b6b;
  }
`;