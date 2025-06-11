import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(13, 13, 13, 0.95);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  backdrop-filter: blur(10px);
`

export const CloseIcon = styled(FaTimes)`
   color: #fff;
   transition: all 0.2s ease-in-out;
   
   &:hover {
     color: #10B981;
   }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
`

export const SidebarWrapper = styled.div`
   color: #fff;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const SidebarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(6, 70px);
   text-align: center;

   @media screen and (max-width: 480px){
     grid-template-rows: repeat(6, 60px);
   }
`


export const SidebarLink = styled(LinkS)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.8rem;
   text-decoration: none;
   list-style: none;
   transition: 0.3s ease-in-out;
   color: #fff;
   cursor: pointer;
   position: relative;
   font-weight: 500;

   &:hover{
       color: #10B981;
   }
   
   &::after {
     content: '';
     height: 2px;
     width: 0;
     background: #10B981;
     position: absolute;
     bottom: -5px;
     left: 50%;
     transform: translateX(-50%);
     transition: width 0.3s ease;
   }
   
   &:hover::after {
     width: 30px;
   }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #10B981;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);

   &:hover{
       background: #0EA271;
       box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
       transform: translateY(-3px);
   }
   
   &:active {
       transform: translateY(1px);
   }
`