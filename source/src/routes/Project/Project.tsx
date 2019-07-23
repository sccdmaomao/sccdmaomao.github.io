import { H3 } from '@blueprintjs/core'
import ProjectShowcase from 'components/ProjectShowcase'
import React from 'react'
import projects from 'texts/Projects'
import routeStyles from '../Route.scss'
import styles from './Project.scss'

const Project = () => {
  return (
    <div className={routeStyles.container}>
      <H3>Projects</H3>
      <div className={styles.previewContainer}>
        {projects.map((project, i) => (
          <ProjectShowcase {...project} key={`project-${i}`} />
        ))}
      </div>
    </div>
  )
}

export default Project
