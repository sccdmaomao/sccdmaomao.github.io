import { Text } from '@blueprintjs/core'
import moment, { Moment } from 'moment'
import React from 'react'
import styles from '../Home.scss'

interface Experience {
  title: string
  company: string
  dateRange: Moment[]
  desc: string
}
const timelines: Experience[] = [
  {
    title: 'Software Engineer',
    company: '@StealthStartUp',
    dateRange: [moment('2017-11'), moment()],
    desc: 'Stealth'
  },
  {
    title: 'Software Engineer',
    company: '@Informatica',
    dateRange: [moment('2017-04'), moment('2017-11')],
    desc: `Joined back as full-time frontend developer, 
      dedicated to design and implement highly customizable, 
      configurable, interactive UI with React stacks.
      Won the in-company innovation award for projects participated`
  },
  {
    title: 'Internship',
    company: '@Informatica',
    dateRange: [moment('2015-08'), moment('2016-09')],
    desc: `PEY - Internship program, worked as part of agile team
     on backend side of Master Data Management Product. 
    Performing debugging, integration, feature implementation tasks with agile development practices.
      `
  }
]

const Experiences = () => {
  return (
    <div>
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
    </div>
  )
}

export default Experiences
