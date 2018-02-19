import classnames from 'classnames'
import React from 'react'
import styles from './ResponsiveWrapper.scss'

interface ResponsiveWrapperProps {
  className?: string
  children: JSX.Element[]
}

const ResponsiveWrapper = (props: ResponsiveWrapperProps) => {
  const { children } = props
  return (
    <div className={classnames(styles.responsive, props.className)}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

export default ResponsiveWrapper
