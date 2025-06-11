import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
    SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute  } from '../elements/SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer 
          isOpen={isOpen} 
          onClick={toggle}
          className="transition-all duration-500 ease-in-out backdrop-blur-md bg-black/90"
        >
            <Icon 
              onClick={toggle}
              className="transition-transform hover:rotate-90 duration-300"
            >
                <CloseIcon className="text-green-400 hover:text-white"/>
            </Icon>
            <SidebarWrapper className="flex flex-col items-center justify-center">
                <SidebarMenu className="space-y-6">
                    <SidebarLink 
                      to='About' 
                      onClick={toggle}
                      className="text-2xl font-medium hover:text-green-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                        About
                    </SidebarLink>
                    <SidebarLink 
                      to='Skills' 
                      onClick={toggle}
                      className="text-2xl font-medium hover:text-green-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                        Skills
                    </SidebarLink>
                    <SidebarLink 
                      to='Services' 
                      onClick={toggle}
                      className="text-2xl font-medium hover:text-green-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                        Service
                    </SidebarLink>
                    <SidebarLink 
                      to='Works' 
                      onClick={toggle}
                      className="text-2xl font-medium hover:text-green-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                        Works
                    </SidebarLink>
                    <SidebarLink 
                      to='Resume' 
                      onClick={toggle}
                      className="text-2xl font-medium hover:text-green-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                        Resume
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap className="mt-10">
                    <SidebarRoute 
                      to='HireMe'
                      className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
                    >
                      Hire Me
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
