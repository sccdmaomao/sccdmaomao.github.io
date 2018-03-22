import React from 'react'
import SelfIntro from './components/SelfIntro'
import styles from './HomePage.scss'

const HomePage = () => {
  return (
    <div className={styles.home}>
      <SelfIntro />
      <hr />
      time line
    </div>
  )
}

export default HomePage
