import React from 'react'
import { Link } from 'react-router-dom'
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

const NavBar = ({ onClick, activeKey }) => {
  const renderNavItem = items =>
    items.map(item => (
      <Link key={`navItem-${item.eventKey}`} to={item.url}>
        {item.name}
      </Link>
    ))

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navBar}>{renderNavItem(navItems)}</nav>
    </div>
  )
}

export default NavBar
