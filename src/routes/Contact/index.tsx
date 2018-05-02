import { Button, Card } from '@blueprintjs/core'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
interface SocialNetWork {
  siteName: string
  url: string
}

const socialNetworks: SocialNetWork[] = [
  {
    siteName: 'LinkedIn',
    url: 'https://www.linkedin.com/in/guohao-yan'
  },
  {
    siteName: 'Github',
    url: 'https://github.com/sccdmaomao'
  },
  {
    siteName: 'StackOverflow',
    url: 'https://stackoverflow.com/users/5490086/alex-yan'
  }
]

interface ContactState {
  showEmail: boolean
}

class Contact extends Component<{}, ContactState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      showEmail: false
    }

    this.toggleEmail = this.toggleEmail.bind(this)
  }

  public render() {
    return (
      <div>
        {socialNetworks.map((contact, index) => (
          <Card
            key={`contact-cards-${index}`}
            interactive
            // tslint:disable:jsx-no-lambda
            onClick={() => this.handleLinkClick(contact.url)}
          >
            <div>{contact.siteName}</div>
          </Card>
        ))}
        <div>
          <Fade bottom when={this.state.showEmail}>
            React Reveal
          </Fade>
          <Button onClick={this.toggleEmail}>
            {this.state.showEmail ? 'Hide' : 'Show'} Email
          </Button>
        </div>
      </div>
    )
  }

  private handleLinkClick(url) {
    window.open(url, '_blank')
  }
  private toggleEmail() {
    this.setState({ showEmail: !this.state.showEmail })
  }
}
export default Contact
