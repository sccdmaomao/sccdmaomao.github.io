import React from 'react'
import { NavLink } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import styles from './NavBar.scss'

const navItems = [
  {
    name: 'Home',
    url: '/',
    eventKey: 1
  },
  {
    name: 'Projects',
    url: '/projects',
    eventKey: 2
  },
  {
    name: 'Contact',
    url: '/contacts',
    eventKey: 3
  }
]

const isActive = e => {
  if (e) {
    return e.path === location.pathname || location.pathname === ''
  }
  return false
}

const NavBar = ({ onClick, activeKey }) => {
  const renderNavItem = items =>
    items.map(item => (
      <NavLink
        key={`navItem-${item.eventKey}`}
        to={item.url}
        className={styles.linkText}
        activeClassName={styles.activeLink}
        isActive={isActive}
      >
        {item.name}
      </NavLink>
    ))

  return (
    <Segment className={styles.navContainer}>
      <nav className={styles.navBar}>{renderNavItem(navItems)}</nav>
    </Segment>
  )
}

export default NavBar
