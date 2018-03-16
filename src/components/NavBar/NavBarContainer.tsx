import React from 'react'
import NavBar from './NavBar'

const NavBarContainer = () => {
  const onItemClick = url => {
    alert('link clicked')
  }
  return <NavBar onClick={onItemClick} />
}

export default NavBarContainer
