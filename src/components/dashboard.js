import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink, Alert, UncontrolledAlert } from 'reactstrap'; 


export const SignOnAlert = () => {
  let visited = sessionStorage.getItem('hasVisited')
  
  if (!visited) {
    sessionStorage.setItem('hasVisted', true)
    return (
      <div>
        <UncontrolledAlert color="success">Login Successful!</UncontrolledAlert>
      </div>
    )
  }
  return ""
}


function Dashboard() {

  //sessionStorage.setItem('hasVisted', false)

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
    <div>
      <SignOnAlert />
    </div>
    <div>
      <h1 align="center">Dashboard</h1>
    </div>
  </div>
  )
}
sessionStorage.setItem('hasVisted', true)

export default Dashboard;