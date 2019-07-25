import { H3 } from '@blueprintjs/core'
import ProjectShowcase from 'components/ProjectShowcase'
import React from 'react'
import projects from 'texts/Projects'
import { RouteWrapper } from '../RouteStyles'
import { PreviewWrapper } from './ProjectStyles'

const Project = () => {
  return (
    <RouteWrapper>
      <H3>Projects</H3>
      <PreviewWrapper>
        {projects.map((project, i) => (
          <ProjectShowcase {...project} key={`project-${i}`} />
        ))}
      </PreviewWrapper>
    </RouteWrapper>
  )
}

export default Project
