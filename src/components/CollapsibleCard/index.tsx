import { Button, Card, Collapse, Elevation } from '@blueprintjs/core'
import classnames from 'classnames'
import React, { Component } from 'react'
import styles from 'routes/Home/Home.scss'

interface CollapsibleCardProps {
  title: string
  children: JSX.Element
  defaultClose?: boolean
  className?: string
  width?: number
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
    const { title, width, children } = this.props
    return (
      <div className={classnames(styles.card, this.props.className)}>
        <Button
          minimal
          icon={isOpen ? 'folder-open' : 'folder-close'}
          style={{ margin: '10px 0' }}
          onClick={this.toggleOpenState}
        >
          <h3>{title}</h3>
        </Button>
        <Collapse isOpen={isOpen}>
          <Card elevation={Elevation.TWO} style={{ width }}>
            {children}
          </Card>
        </Collapse>
      </div>
    )
  }

  private toggleOpenState = () => this.setState({ isOpen: !this.state.isOpen })
}

export default CollapsibleCard
