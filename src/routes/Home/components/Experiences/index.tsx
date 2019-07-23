import { Text } from '@blueprintjs/core'
import moment from 'moment'
import React from 'react'
import timelines from 'texts/Experiences'
import styles from './Experiences.scss'

const Experiences = () => {
  return (
    <ul>
      {timelines.map((timeline, index) => (
        <li key={`timeline-${index}`} className={styles.experience}>
          <div className={styles.titleContainer}>
            <Text className={styles.experienceTitle}>{timeline.title}</Text>
            <Text>
              {` ${timeline.dateRange[0].format('MMM YYYY')} - ${
                timeline.dateRange[1].diff(moment(), 'months') === 0
                  ? 'Present'
                  : timeline.dateRange[1].format('MMM YYYY')
              } (${timeline.dateRange[1].diff(
                timeline.dateRange[0],
                'months'
              )} months)`}
            </Text>
          </div>
          <Text className={styles.experienceExtra}>{timeline.company}</Text>
          <Text className={styles.experienceDesc}>{timeline.desc}</Text>
        </li>
      ))}
    </ul>
  )
}

export default Experiences
