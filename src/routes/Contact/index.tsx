import { Button, Card, Intent, Position, Toaster } from '@blueprintjs/core'
import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Fade from 'react-reveal/Fade'
import styles from './Contact.scss'

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
    this.handleEmailClick = this.handleEmailClick.bind(this)
  }

  public render() {
    return (
      <div style={{ minWidth: '600px' }}>
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
        <Card className={styles.showEmail}>
          {!this.state.showEmail && <span>Email</span>}
          <Fade bottom when={this.state.showEmail}>
            <CopyToClipboard
              text={'sccdmaomao@hotmail.com'}
              onCopy={this.state.showEmail && this.handleEmailClick}
            >
              <span className={styles.email}>sccdmaomao@hotmail.com</span>
            </CopyToClipboard>
          </Fade>
          <Button onClick={this.toggleEmail}>
            {this.state.showEmail ? 'Hide' : 'Show'} Email
          </Button>
        </Card>
      </div>
    )
  }
  private handleEmailClick() {
    const appToaster = Toaster.create({
      position: Position.TOP
    })
    appToaster.show({
      message: 'Copied to clipboard.',
      intent: Intent.SUCCESS,
      icon: 'saved',
      timeout: 2000
    })
  }

  private handleLinkClick(url) {
    window.open(url, '_blank')
  }

  private toggleEmail() {
    this.setState({ showEmail: !this.state.showEmail })
  }
}
export default Contact
