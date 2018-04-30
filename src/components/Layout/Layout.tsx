import Nav from 'components/Nav'
import React from 'react'

interface LayoutProps {
  children: JSX.Element
}

const Layout = (props: LayoutProps) => {
  return (
    <div style={{ padding: '0 30%' }}>
      <Nav />
      {props.children}
    </div>
  )
}

export default Layout
