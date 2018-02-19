import React from 'react'
import ResponsiveWrapper from 'components/ResponsiveWrapper'
import NavBar, { NavItem } from 'components/NavigationBar'
import styles from './Page.scss'
const Page = () => {
  return (
    <div>
      <NavBar>
        <ResponsiveWrapper className={styles.navItems}>
          <NavItem active text={'Home'} />
          <NavItem text={'Projects'} />
          <NavItem text={'Contacts'} />
          <NavItem text={'Gallery'} />
        </ResponsiveWrapper>
      </NavBar>
      Guohao's page
    </div>
  )
}

export default Page
