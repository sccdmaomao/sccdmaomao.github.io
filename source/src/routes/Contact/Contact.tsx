import { Card } from '@blueprintjs/core'
import React from 'react'
import { RouteWrapper } from '../RouteStyles'
import { StyledImg } from './ContactStyles'

interface SocialNetWork {
  siteName: string
  url: string
  icon?: any
}

const socialNetworks: SocialNetWork[] = [
  {
    siteName: 'Github',
    url: 'https://github.com/sccdmaomao',
    icon: require('icons/GitHub_Logo.png')
  },
  {
    siteName: 'LinkedIn',
    url: 'https://www.linkedin.com/in/guohao-yan',
    icon: require('icons/LinkedIn_Logo.png')
  },
  {
    siteName: 'StackOverflow',
    url: 'https://stackoverflow.com/users/5490086/alex-yan',
    icon: require('icons/StackOverFlow_Logo.png')
  }
]

const Contact: React.SFC<{}> = ({}) => (
  <RouteWrapper>
    {socialNetworks.map((contact, index) => (
      <Card
        key={`contact-cards-${index}`}
        interactive
        onClick={() => window.open(contact.url, '_blank')}
      >
        <StyledImg src={contact.icon} />
      </Card>
    ))}
  </RouteWrapper>
)

export default Contact
