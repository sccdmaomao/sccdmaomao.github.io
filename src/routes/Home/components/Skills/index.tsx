import { MenuItem } from '@blueprintjs/core'
import { DateInput, DateRange, DateRangePicker } from '@blueprintjs/datetime'
import SkillCategorySelector, {
  SkillCategory,
  skillCategoryOptions
} from 'components/SkillCategorySelector'
import React, { Component } from 'react'

interface CategorySelectState {
  category: string
}

class Skills extends Component<{}, CategorySelectState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      category: skillCategoryOptions[0].text
    }
  }

  public render() {
    return (
      <div>
        <SkillCategorySelector
          itemRenderer={this.itemRenderer}
          handleItemSelect={this.handleItemSelect}
          targetText={this.state.category}
        />
        <hr />
        <div>tags</div>
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
      category: item.text
    })
  }
}

export default Skills
