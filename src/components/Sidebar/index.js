import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements'

const SidebarElements = ({ isOpen, toggle }) =>{
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink 
                            to='about' 
                            onClick={toggle}
                        >
                            About
                        </SidebarLink>
                        <SidebarLink 
                        to='sponsor' 
                        onClick={toggle}
                        >
                            Sponsors
                        </SidebarLink>
                        <SidebarLink 
                        to='staff' 
                        onClick={toggle}
                        >
                            Staff 
                        </SidebarLink>
                        
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute>Sign In</SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default SidebarElements
