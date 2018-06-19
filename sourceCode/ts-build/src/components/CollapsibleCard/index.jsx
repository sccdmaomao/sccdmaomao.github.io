import { Button, Card, Collapse, Elevation } from '@blueprintjs/core';
import React, { Component } from 'react';
class CollapsibleCard extends Component {
    constructor(props) {
        super(props);
        this.toggleOpenState = () => this.setState({ isOpen: !this.state.isOpen });
        this.state = {
            isOpen: !props.defaultClose
        };
    }
    render() {
        const { isOpen } = this.state;
        const { title, minWidth, width, children } = this.props;
        return (<div className={this.props.className}>
        <Button minimal icon={isOpen ? 'folder-open' : 'folder-close'} style={{ margin: '10px 0' }} onClick={this.toggleOpenState}>
          <h3>{title}</h3>
        </Button>
        <Collapse isOpen={isOpen}>
          <Card elevation={Elevation.TWO} style={{ width, minWidth }}>
            {children}
          </Card>
        </Collapse>
      </div>);
    }
}
export default CollapsibleCard;
//# sourceMappingURL=index.jsx.map