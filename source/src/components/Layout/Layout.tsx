import Nav from 'components/Nav'
import React from 'react'
import { LayoutWrapper } from './LayoutStyles'

const Layout: React.SFC<{}> = props => {
  return (
    <LayoutWrapper>
      <Nav />
      {props.children}
    </LayoutWrapper>
  )
}

export default Layout
