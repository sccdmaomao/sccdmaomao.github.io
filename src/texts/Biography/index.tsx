import { Replaces } from 'components/TextWithLinks'
import React from 'react'

const intro = `
Graduated from University of Toronto in 2017 with
a computer science degree. I'm a passionate,
friendly person that loves traveling, out-door 
sports, video games, and cats!
`

const footerText = `Sometimes I code in spare time, just to implement all the random ideas that
    pop out of my head. Checkout some of those in the _projects_ tab!`

const footerTextReplaces: Replaces[] = [
  {
    test: '_projects_',
    replace: <a>Projects</a>
  }
]
export { intro, footerText, footerTextReplaces }
