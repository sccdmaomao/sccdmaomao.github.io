import {
  Alignment,
  Button,
  IconName,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Tab,
  Tabs
} from '@blueprintjs/core'
import classnames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

export const links: Array<{ text: string; to: string; icon?: IconName }> = [
  { text: 'Home', to: '', icon: 'home' },
  { text: 'Projects', to: 'project', icon: 'applications' },
  { text: 'Contact', to: 'contact', icon: 'new-person' }
]

const Nav = () => {
  const pathname = location.pathname.slice(1)
  let selectedTabId
  links.forEach((link, i) => {
    if (link.to === pathname) {
      selectedTabId = `NavLink-${i}`
    }
  })
  return (
    <Navbar className={classnames('bp3-dark')} fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Guohao Yan</NavbarHeading>
        <NavbarDivider />
        <Tabs id="navigation-tabs" selectedTabId={selectedTabId}>
          {links.map((obj, i) => (
            <Tab id={`NavLink-${i}`} key={`NavLink-${i}`}>
              <Link to={obj.to}>
                <Button minimal text={obj.text} icon={obj.icon} />
              </Link>
            </Tab>
          ))}
        </Tabs>
      </NavbarGroup>
    </Navbar>
  )
}

export default Nav
