import { Tag } from '@blueprintjs/core'
import { SkillCategory } from 'components/SkillCategorySelector'
import React from 'react'
import skills from 'texts/Skills'
import styles from './Tags.scss'

interface SkillCategoryTagsProps {
  category: string
  handleItemSelect: (item: SkillCategory) => void
}

const SkillCategoryTags = (props: SkillCategoryTagsProps) => {
  let displaySkills: string[] = skills[props.category] || []
  if (props.category === 'all') {
    Object.keys(skills).forEach(skillCategory => {
      displaySkills = displaySkills.concat(skills[skillCategory])
    })
  }
  return (
    <div>
      {displaySkills.sort().map((skill, index) => (
        <Tag
          key={`skill-tag-${index}`}
          interactive
          large
          className={styles.tag}
          onClick={(e: any) => {
            const text = e.target.textContent
            Object.keys(skills).forEach(skillCategory => {
              if (skills[skillCategory].includes(text)) {
                props.handleItemSelect({ text: skillCategory })
              }
            })
          }}
        >
          {skill}
        </Tag>
      ))}
    </div>
  )
}

export default SkillCategoryTags
