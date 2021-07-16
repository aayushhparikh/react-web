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

const Navbar = ({toggle}) => {
    return (
      <div>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>Home</NavLogo>
                  <Icon onClick={toggle}>
                      <FaBars />
                  </Icon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">
                              About
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="experience">
                              Experience
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="projects">
                              Projects
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
      </div>
    )
}

export default Navbar
