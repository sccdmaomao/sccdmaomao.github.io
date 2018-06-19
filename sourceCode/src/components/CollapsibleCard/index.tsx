import { Button, Card, Collapse, Elevation } from '@blueprintjs/core'
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
          icon={isOpen ? 'folder-open' : 'folder-close'}
          style={{ margin: '10px 0' }}
          onClick={this.toggleOpenState}
        >
          <h3>{title}</h3>
        </Button>
        <Collapse isOpen={isOpen}>
          <Card elevation={Elevation.TWO} style={{ width, minWidth }}>
            {children}
          </Card>
        </Collapse>
      </div>
    )
  }

  private toggleOpenState = () => this.setState({ isOpen: !this.state.isOpen })
}

export default CollapsibleCard
