import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'; 


const Work = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/dashboard">dS</NavbarBrand>
          <Nav navbar>  
            <NavItem>  
              <NavLink href="/projects/">Projects</NavLink>
            </NavItem>
            <NavItem>  
              <NavLink href="/features/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/releases/">Releases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sprints/">Sprints</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tasks/">Tasks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/teams/">Teams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/work/">Work</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
          <h2 align="center">Work</h2>
      </div>
  )
}

export default Work;