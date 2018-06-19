import React from 'react';
const TextWrapper = (props) => {
    const { textSegments, componentSegments } = props;
    const wrapper = [];
    textSegments.forEach((text, index) => {
        wrapper.push(<span key={`bio-${index}`}>{text}</span>);
        if (componentSegments[index]) {
            wrapper.push(componentSegments[index]);
        }
    });
    return <div>{wrapper}</div>;
};
export default TextWrapper;
//# sourceMappingURL=index.jsx.map