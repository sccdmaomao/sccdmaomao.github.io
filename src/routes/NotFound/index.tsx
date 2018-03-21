import React from 'react'
import { Image } from 'semantic-ui-react'
import styles from './NotFound.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
      <Image src="/assets/404.png" centered />
    </div>
  )
}

export default NotFound
