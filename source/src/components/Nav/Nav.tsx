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
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const links: Array<{ text: string; to: string; icon?: IconName }> = [
  { text: 'About Me', to: '', icon: 'home' },
  { text: 'Projects', to: 'project', icon: 'applications' },
  { text: 'Contact', to: 'contact', icon: 'new-person' }
]

interface NavState {
  selectedTabId: string
}

class Nav extends Component<{}, NavState> {
  public constructor(props) {
    super(props)
    const pathname = location.hash.slice(2)
    links.forEach((link, i) => {
      if (link.to === pathname) {
        this.state = {
          selectedTabId: `NavLink-${i}`
        }
      }
    })
  }
  public render() {
    const { selectedTabId } = this.state
    return (
      <Navbar className={classnames('bp3-dark')} fixedToTop>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Guohao Yan</NavbarHeading>
          <NavbarDivider />
          <Tabs id="navigation-tabs" selectedTabId={selectedTabId}>
            {links.map((obj, i) => (
              <Tab id={`NavLink-${i}`} key={`NavLink-${i}`}>
                <Link to={obj.to} onClick={() => this.linkOnClick(i)}>
                  <Button minimal text={obj.text} icon={obj.icon} />
                </Link>
              </Tab>
            ))}
          </Tabs>
        </NavbarGroup>
      </Navbar>
    )
  }

  private linkOnClick(id: number) {
    this.setState({
      selectedTabId: `NavLink-${id}`
    })
  }
}

export default Nav
