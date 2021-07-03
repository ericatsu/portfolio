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
                    <SidebarLink to='Serice'>
                        Service
                    </SidebarLink>
                    <SidebarLink to='skills'>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='Contact'>
                        Contact
                    </SidebarLink>
                    <SidebarLink to='Works'>
                        Works
                    </SidebarLink>
                    <SidebarLink to='About'>
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
