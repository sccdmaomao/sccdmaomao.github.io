import { Text } from '@blueprintjs/core'
import CollapsibleCard from 'components/CollapsibleCard'
import React from 'react'
import Experiences from './components/Experiences'

const HomePage = () => (
  <div>
    <CollapsibleCard title={'Biography'}>
      <Text>Bio..</Text>
    </CollapsibleCard>
    <CollapsibleCard title={'Skills'} defaultClose>
      <Text>Skills..</Text>
    </CollapsibleCard>
    <CollapsibleCard title={'Experiences'}>
      <Experiences />
    </CollapsibleCard>
  </div>
)

export default HomePage
