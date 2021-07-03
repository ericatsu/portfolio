import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from '../elements/SideBarElements'

const SideBar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='Serice'>
                        Serice
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
