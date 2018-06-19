import Nav from 'components/Nav'
import React from 'react'
import styles from './Layout.scss'

interface LayoutProps {
  children: JSX.Element
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Nav />
      {props.children}
    </div>
  )
}

export default Layout
