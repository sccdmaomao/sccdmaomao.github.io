import { Text } from '@blueprintjs/core'
import TextWrapper from 'components/TextWrapper'
import React from 'react'
import { bodyText, footerComponents, footerText, intro } from 'texts/Biography'

const Biography = () => {
  return (
    <div>
      <Text>{intro}</Text>
      <br />
      <Text>{bodyText}</Text>
      <br />
      <TextWrapper
        textSegments={footerText}
        componentSegments={footerComponents}
      />
    </div>
  )
}

export default Biography
