import React from 'react'
import { NavLink } from 'react-router-dom'
const intro = `
Graduated from University of Toronto in 2017 with
a computer science degree. I'm a passionate,
friendly person that loves traveling, out-door 
sports, video games, and cats!
`
const bodyText = `Sometimes I code in spare time, just to implement all the random ideas that
pop out of my head.`

const footerText = [` Checkout some of those in the `, ` tab!`]

// tslint:disable:jsx-wrap-multiline
const footerComponents = [
  <NavLink to={'project'} key={`footer-1`}>
    <span style={{ fontWeight: 'bold' }}>Projects</span>
  </NavLink>
]
export { intro, bodyText, footerText, footerComponents }
