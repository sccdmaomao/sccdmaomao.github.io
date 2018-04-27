import { Text } from '@blueprintjs/core'
import replace from 'lodash.replace'
import React from 'react'

export interface Replaces {
  test: string
  replace: JSX.Element
}

interface TextWithLinkProps {
  text: string
  replaces: Replaces[]
}

const TextWithLinks = (props: TextWithLinkProps) => {
  let displayText = props.text
  props.replaces.forEach(replaces => {
    displayText = replace(displayText, replaces.test, replaces.replace)
  })
  return <Text>{displayText}</Text>
}

export default TextWithLinks
