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
                          <NavLinks to="about"
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact='true'>
                              About
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="experience"
                           smooth={true} 
                           duration={500} 
                           spy={true} 
                           exact='true'>
                              Experience
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="projects"
                           smooth={true} 
                           duration={500} 
                           spy={true} 
                           exact='true'>
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
