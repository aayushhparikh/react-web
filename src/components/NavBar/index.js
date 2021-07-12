import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    Icon, 
    NavMenu, 
    NavItem, 
    NavLinks
    } from './navBarElements'

const Navbar = () => {
    return (
      <div>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>Home</NavLogo>
                  <Icon>
                      <FaBars />
                  </Icon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">
                              About
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
      </div>
    )
}

export default Navbar
