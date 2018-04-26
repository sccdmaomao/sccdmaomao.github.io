import { Button } from '@blueprintjs/core'
import { ItemPredicate, Select } from '@blueprintjs/select'
import classnames from 'classnames'
import React from 'react'

export interface SkillCategory {
  text: string
}

export const skillCategoryOptions: SkillCategory[] = [
  { text: 'All' },
  { text: 'Frontend' },
  { text: 'Backend' },
  { text: 'Tools' }
]

const SkillCategorySelect = Select.ofType<SkillCategory>()

const filterRule: ItemPredicate<SkillCategory> = (query, category) => {
  return category.text.toLowerCase().indexOf(query.toLowerCase()) >= 0
}

interface SkillCategorySelectorProps {
  targetText: string
  itemRenderer: (item: SkillCategory, { handleClick }) => JSX.Element
  handleItemSelect: (item: SkillCategory) => void
}

const SkillCategorySelector = (props: SkillCategorySelectorProps) => {
  return (
    <SkillCategorySelect
      itemPredicate={filterRule}
      items={skillCategoryOptions}
      itemRenderer={props.itemRenderer}
      onItemSelect={props.handleItemSelect}
    >
      <Button
        className={classnames('pt-input')}
        rightIcon="caret-down"
        text={props.targetText}
        minimal
      />
    </SkillCategorySelect>
  )
}

export default SkillCategorySelector
