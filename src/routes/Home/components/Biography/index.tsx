import { Text } from '@blueprintjs/core'
import TextWithLink from 'components/TextWithLinks'
import React from 'react'
import { footerText, footerTextReplaces, intro } from 'texts/Biography'

const Biography = () => {
  return (
    <div>
      <Text>{intro}</Text>
      <TextWithLink text={footerText} replaces={footerTextReplaces} />
    </div>
  )
}

export default Biography
