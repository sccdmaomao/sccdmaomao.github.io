import { Text } from '@blueprintjs/core'
import React from 'react'
import timelines from 'texts/Experiences'
import styles from '../Home.scss'

const Experiences = () => {
  return (
    <ul>
      {timelines.map((timeline, index) => (
        <li key={`timeline-${index}`} className={styles.experience}>
          <Text className={styles.experienceTitle}>{timeline.title}</Text>
          <Text className={styles.experienceExtra}>{timeline.company}</Text>
          <Text className={styles.experienceExtra}>
            {timeline.dateRange[0].format('MMM YYYY')} -{' '}
            {timeline.dateRange[1].format('MMM YYYY')} ({timeline.dateRange[1].diff(
              timeline.dateRange[0],
              'months'
            )}{' '}
            months)
          </Text>
          <Text className={styles.experienceDesc}>{timeline.desc}</Text>
        </li>
      ))}
    </ul>
  )
}

export default Experiences
