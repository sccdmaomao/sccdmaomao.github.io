import React, { Component } from 'react'
import NavBar from './NavBar'

interface NavBarState {
  activeKey: number
}

class NavBarContainer extends Component<{}, NavBarState> {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: 1
    }
  }

  private onItemClick = (e, key) => {
    e.preventDefault()
    this.setState({
      activeKey: key
    })
  }

  public render() {
    const { activeKey } = this.state
    return <NavBar onClick={this.onItemClick} activeKey={activeKey} />
  }
}

export default NavBarContainer
