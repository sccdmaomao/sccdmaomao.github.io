import { Tag } from '@blueprintjs/core'
import React from 'react'
import skills from 'texts/Skills'
import styles from './Tags.scss'

interface SkillCategoryTagsProps {
  category: string
}

const SkillCategoryTags = (props: SkillCategoryTagsProps) => {
  let displaySkills: string[] = skills[props.category] || []
  if (props.category === 'all') {
    Object.keys(skills).forEach(skillCategory => {
      displaySkills = displaySkills.concat(skills[skillCategory])
    })
  }
  return (
    <div className={styles.tagsContainer}>
      {displaySkills.map((skill, index) => (
        <Tag key={`skill-tag-${index}`} interactive large>
          {skill}
        </Tag>
      ))}
    </div>
  )
}

export default SkillCategoryTags
