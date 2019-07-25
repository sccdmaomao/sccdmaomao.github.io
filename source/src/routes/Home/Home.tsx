import { CollapsibleCardProps } from 'components/CollapsibleCard'
import React from 'react'
import { RouteWrapper } from '../RouteStyles'
import Biography from './components/Biography'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import { StyledCard } from './HomeStyles'

const cards: CollapsibleCardProps[] = [
  { title: 'Biography', minWidth: 700, children: <Biography /> },
  {
    title: 'Framework/ Languages/ Skills / Tools ',
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
  <RouteWrapper>
    {cards.map(card => {
      const { children, ...rest } = card
      return (
        <StyledCard key={`home-card-${card.title}`} {...rest}>
          {children}
        </StyledCard>
      )
    })}
  </RouteWrapper>
)

export default HomePage
