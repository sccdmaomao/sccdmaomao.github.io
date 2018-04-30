import React from 'react'

interface TextWrapperProps {
  textSegments: string[]
  componentSegments: JSX.Element[]
}

const TextWrapper = (props: TextWrapperProps) => {
  const { textSegments, componentSegments } = props
  const wrapper = []

  textSegments.forEach((text, index) => {
    wrapper.push(<span>{text}</span>)
    if (componentSegments[index]) {
      wrapper.push(componentSegments[index])
    }
  })

  return <div>{wrapper}</div>
}

export default TextWrapper
