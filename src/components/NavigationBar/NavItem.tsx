import React from 'react'
import styles from './Navigation.scss'
import classnames from 'classnames'

interface NavItemProps {
  active?: boolean
  text: string
}

const NavItem = (props: NavItemProps) => {
  const { text, active } = props
  const classes = classnames({
    active: active
  })
  return <span className={classes}>{text}</span>
}

export default NavItem
