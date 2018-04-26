import { Text } from '@blueprintjs/core'
import CollapsibleCard from 'components/CollapsibleCard'
import React from 'react'
import Experiences from './components/Experiences'
import Skills from './components/Skills'

interface Card {
  title: string
  children: JSX.Element
  defaultClose?: boolean
  width?: number
}

const cards: Card[] = [
  { title: 'Biography', width: 1000, children: <Text>Bio..</Text> },
  {
    title: 'Skills',
    width: 1000,
    children: <Skills />
  },
  {
    title: 'Experiences',
    width: 1000,
    defaultClose: true,
    children: <Experiences />
  }
]

const HomePage = () => (
  <div>
    {cards.map(card => {
      const { children, ...rest } = card
      return (
        <CollapsibleCard key={`home-card-${card.title}`} {...rest}>
          {children}
        </CollapsibleCard>
      )
    })}
  </div>
)

export default HomePage
