import React, { Component } from 'react'
import NavBar from './NavBar'

export interface NavItemObject {
  name: string
  url: url
  eventKey: number
}

export type url = '/' | '/projects' | '/contacts' | '/to-be-removed'
export const navItems: NavItemObject[] = [
  {
    name: 'Guohao',
    url: '/',
    eventKey: 0
  },
  {
    name: 'Projects',
    url: '/projects',
    eventKey: 1
  },
  {
    name: 'Contact',
    url: '/contacts',
    eventKey: 2
  },
  {
    name: '404',
    url: '/to-be-removed',
    eventKey: 3
  }
]

interface NavBarState {
  activeKey: number
}

class NavBarContainer extends Component<{}, NavBarState> {
  constructor(props) {
    super(props)
    const path = location.pathname
    const activeItem = navItems.filter(item => item.url === path)[0]
    this.state = {
      activeKey: activeItem.eventKey
    }
  }

  public render() {
    const { activeKey } = this.state
    return <NavBar onClick={this.onItemClick} activeKey={activeKey} />
  }

  private onItemClick = (e, key) => {
    this.setState({
      activeKey: key
    })
  }
}

export default NavBarContainer
