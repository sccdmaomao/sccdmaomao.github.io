import React from 'react'

interface TextWrapperProps {
    textSegments: string[]
    componentSegments: JSX.Element[]
}

const TextWrapper: React.FC<TextWrapperProps> = props => {
    const { textSegments, componentSegments } = props
    const wrapper: JSX.Element[] = []

    textSegments.forEach((text, index) => {
        wrapper.push(<span key={`bio-${index}`}>{text}</span>)
        if (componentSegments[index]) {
            wrapper.push(componentSegments[index])
        }
    })

    return <div>{wrapper}</div>
}

export default TextWrapper
