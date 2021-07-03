import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
    SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute  } from '../elements/SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='Serice' onClick={toggle}>
                        Service
                    </SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                    <SidebarLink to='Works' onClick={toggle}>
                        Works
                    </SidebarLink>
                    <SidebarLink to='About' onClick={toggle}>
                        About
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/HireMe'>Hire Me</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
