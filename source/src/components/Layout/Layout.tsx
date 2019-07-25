import Nav from 'components/Nav'
import React from 'react'
import { LayoutWrapper } from './LayoutStyles'

interface LayoutProps {
  children: JSX.Element
}

const Layout = (props: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Nav />
      {props.children}
    </LayoutWrapper>
  )
}

export default Layout
