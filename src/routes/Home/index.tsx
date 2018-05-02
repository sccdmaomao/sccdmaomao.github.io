import CollapsibleCard, {
  CollapsibleCardProps
} from 'components/CollapsibleCard'
import React from 'react'
import Biography from './components/Biography'
import Experiences from './components/Experiences'
import Skills from './components/Skills'

const cards: CollapsibleCardProps[] = [
  { title: 'Biography', minWidth: 700, children: <Biography /> },
  {
    title: 'Skills',
    minWidth: 700,
    children: <Skills />
  },
  {
    title: 'Experiences',
    minWidth: 700,
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
