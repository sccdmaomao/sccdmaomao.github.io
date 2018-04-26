import { MenuItem } from '@blueprintjs/core'
import { DateInput, DateRange, DateRangePicker } from '@blueprintjs/datetime'
import SkillCategorySelector, {
  SkillCategory,
  skillCategoryOptions
} from 'components/SkillCategorySelector'
import SkillCategoryTags from 'components/SkillCategoryTags'
import React, { Component } from 'react'
import capitalize from 'utils/capitalize'

interface CategorySelectState {
  category: string
}

class Skills extends Component<{}, CategorySelectState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      category: skillCategoryOptions[0].text.toLowerCase()
    }
  }

  public render() {
    const { category } = this.state
    return (
      <div>
        <SkillCategorySelector
          itemRenderer={this.itemRenderer}
          handleItemSelect={this.handleItemSelect}
          targetText={capitalize(category)}
        />
        <hr />
        <SkillCategoryTags category={category} />
      </div>
    )
  }

  private itemRenderer = (item, { handleClick }) => {
    return (
      <MenuItem
        style={{ width: '280px' }}
        key={`select-menu-${item.text}`}
        onClick={handleClick}
        text={item.text}
      />
    )
  }

  private handleItemSelect = (item: SkillCategory) => {
    this.setState({
      category: item.text.toLowerCase()
    })
  }
}

export default Skills
