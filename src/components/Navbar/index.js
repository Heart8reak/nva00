import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav className="navbar">
                <NavbarContainer>
                    <NavLogo to='/'>NVA</NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='sponsors'>Sponsors</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='staff'>Staff</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/' />
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
