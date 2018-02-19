import React from 'react'
import styles from './Navigation.scss'
const NavigationBar = ({ children }) => {
  return <nav className={styles.root}>{children}</nav>
}

export default NavigationBar
