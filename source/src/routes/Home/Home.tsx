import CollapsibleCard, {
  CollapsibleCardProps
} from 'components/CollapsibleCard'
import React from 'react'
import styles from '../Route.scss'
import Biography from './components/Biography'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import ownStyles from './Home.scss'

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
  <div className={styles.container}>
    {cards.map(card => {
      const { children, ...rest } = card
      return (
        <CollapsibleCard
          key={`home-card-${card.title}`}
          {...rest}
          className={ownStyles.card}
        >
          {children}
        </CollapsibleCard>
      )
    })}
  </div>
)

export default HomePage
