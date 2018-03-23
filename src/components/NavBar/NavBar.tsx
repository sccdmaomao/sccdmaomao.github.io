import React from 'react'
import { NavLink } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import styles from './NavBar.scss'
import { NavItemObject, navItems } from './NavBarContainer'

const isActive: (e) => boolean = e => {
  if (e) {
    return e.path === location.pathname || location.pathname === ''
  }
  return false
}

interface NavBarProps {
  onClick: (e: Event, key: number) => void
  activeKey: number
}

const NavBar = (props: NavBarProps) => {
  const { onClick, activeKey } = props
  const renderNavItem: (items: NavItemObject[]) => JSX.Element[] = items =>
    items.map(item => {
      const linkText =
        item.eventKey === activeKey ? `< ${item.name} >` : item.name
      return (
        <NavLink
          key={`navItem-${item.eventKey}`}
          to={item.url}
          className={styles.linkText}
          activeClassName={styles.activeLink}
          isActive={isActive}
          onClick={
            // tslint:disable:jsx-no-lambda
            e => onClick(e, item.eventKey)
          }
        >
          {linkText}
        </NavLink>
      )
    })

  return (
    <Segment className={styles.navContainer}>
      <nav className={styles.navBar}>{renderNavItem(navItems)}</nav>
    </Segment>
  )
}

export default NavBar
