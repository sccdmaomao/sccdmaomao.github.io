import { Button, Card, Collapse, Elevation, H3, Icon } from '@blueprintjs/core'
import React, { Component } from 'react'

export interface CollapsibleCardProps {
  title: string
  children: JSX.Element
  defaultClose?: boolean
  className?: string
  width?: number
  minWidth?: number
}

interface CollapsibleCardState {
  isOpen: boolean
}

class CollapsibleCard extends Component<
  CollapsibleCardProps,
  CollapsibleCardState
> {
  constructor(props: CollapsibleCardProps) {
    super(props)
    this.state = {
      isOpen: !props.defaultClose
    }
  }

  public render() {
    const { isOpen } = this.state
    const { title, minWidth, width, children } = this.props
    return (
      <div className={this.props.className}>
        <Button
          minimal
          icon={<Icon icon={isOpen ? 'minimize' : 'maximize'} iconSize={20} />}
          style={{ margin: '10px 0' }}
          onClick={this.toggleOpenState}
          text={<H3>{title}</H3>}
        />
        <Collapse isOpen={isOpen}>
          <Card
            elevation={Elevation.TWO}
            style={{ width, minWidth, maxWidth: '900px' }}
          >
            {children}
          </Card>
        </Collapse>
      </div>
    )
  }

  private toggleOpenState = () => this.setState({ isOpen: !this.state.isOpen })
}

export default CollapsibleCard
