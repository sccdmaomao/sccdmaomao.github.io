import Nav from 'components/Nav'
import React from 'react'

interface LayoutProps {
  children: JSX.Element
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}

export default Layout
