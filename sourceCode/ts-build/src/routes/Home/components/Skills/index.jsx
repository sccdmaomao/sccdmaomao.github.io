import { MenuItem } from '@blueprintjs/core';
import SkillCategorySelector, { skillCategoryOptions } from 'components/SkillCategorySelector';
import SkillCategoryTags from 'components/SkillCategoryTags';
import React, { Component } from 'react';
import capitalize from 'utils/capitalize';
class Skills extends Component {
    constructor(props) {
        super(props);
        this.itemRenderer = (item, { handleClick }) => {
            return (<MenuItem active={this.state.category === item.text.toLowerCase()} style={{ width: '280px' }} key={`select-menu-${item.text}`} onClick={handleClick} text={item.text}/>);
        };
        this.handleItemSelect = (item) => {
            this.setState({
                category: item.text.toLowerCase()
            });
        };
        this.state = {
            category: skillCategoryOptions[0].text.toLowerCase()
        };
    }
    render() {
        const { category } = this.state;
        return (<div>
        <SkillCategorySelector itemRenderer={this.itemRenderer} handleItemSelect={this.handleItemSelect} targetText={capitalize(category)}/>
        <hr />
        <SkillCategoryTags category={category}/>
      </div>);
    }
}
export default Skills;
//# sourceMappingURL=index.jsx.map