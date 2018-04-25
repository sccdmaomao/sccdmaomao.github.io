import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { text: 'Home', to: '' },
  { text: 'Project', to: 'project' },
  { text: 'Contact', to: 'contact' },
  { text: '404', to: 'no-thing-here' }
]

const Nav = () => {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Guohao Yan</NavbarHeading>
        <NavbarDivider />
        {links.map((obj, i) => (
          <NavLink to={obj.to} key={`NavLink-${i}`}>
            <Button minimal text={obj.text} />
          </NavLink>
        ))}
      </NavbarGroup>
    </Navbar>
  )
}

export default Nav
