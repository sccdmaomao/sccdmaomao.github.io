import { Button } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import classnames from 'classnames';
import React from 'react';
import skills from 'texts/Skills';
import capitalize from 'utils/capitalize';
export const skillCategoryOptions = [{ text: 'All' }].concat(Object.keys(skills).map(category => {
    return {
        text: capitalize(category)
    };
}));
const SkillCategorySelect = Select.ofType();
const filterRule = (query, category) => {
    return category.text.toLowerCase().indexOf(query.toLowerCase()) >= 0;
};
const SkillCategorySelector = (props) => {
    return (<SkillCategorySelect itemPredicate={filterRule} items={skillCategoryOptions} itemRenderer={props.itemRenderer} onItemSelect={props.handleItemSelect}>
      <Button className={classnames('pt-input')} rightIcon="caret-down" text={props.targetText} minimal/>
    </SkillCategorySelect>);
};
export default SkillCategorySelector;
//# sourceMappingURL=index.jsx.map