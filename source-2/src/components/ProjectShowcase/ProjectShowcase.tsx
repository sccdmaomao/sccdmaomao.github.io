import { Card, H3, MenuDivider } from '@blueprintjs/core'
import React from 'react'
import { PreviewImage, StyledTag, TagsWrapper } from './ProjectShowcaseStyles'

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
      <PreviewImage src={preview} onClick={() => window.open(url, '_blank')} />
      <MenuDivider />
      <TagsWrapper>
        {tags.map((tag, i) => (
          <StyledTag key={`tag-${title}-${i}`} round>
            {tag}
          </StyledTag>
        ))}
      </TagsWrapper>
    </Card>
  )
}

export default ProjectShowcase
