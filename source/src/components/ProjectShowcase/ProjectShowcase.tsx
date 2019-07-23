import { Card, H3, MenuDivider, Tag } from '@blueprintjs/core'
import React from 'react'
import styles from './ProjectShowcase.scss'

interface ProjectShowcaseProps {
  title: string
  url: string
  desc: string
  preview: any
  tags: string[]
}

const ProjectShowcase: React.SFC<ProjectShowcaseProps> = ({
  title,
  url,
  desc,
  tags,
  preview
}) => {
  return (
    <Card>
      <H3>{title}</H3>
      <p>{desc}</p>
      <img
        src={preview}
        className={styles.preview}
        onClick={() => window.open(url, '_blank')}
      />
      <MenuDivider />
      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <Tag key={`tag-${title}-${i}`} round className={styles.tag}>
            {tag}
          </Tag>
        ))}
      </div>
    </Card>
  )
}

export default ProjectShowcase
