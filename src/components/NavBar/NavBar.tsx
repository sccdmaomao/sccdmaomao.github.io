import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

const NavBar = ({ onClick }) => {
  return (
    <Nav bsStyle="pills" activeKey={1} onSelect={onClick}>
      <NavItem eventKey={1} href="/home">
        NavItem 1 content
      </NavItem>
      <NavItem eventKey={2} title="Item">
        NavItem 2 content
      </NavItem>
      <NavItem eventKey={3} disabled>
        NavItem 3 content
      </NavItem>
    </Nav>
  )
}

export default NavBar
