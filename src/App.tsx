import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, NotFound } from 'routes'
import { Grid, Rail, Segment, Sticky } from 'semantic-ui-react'
import styles from './App.scss'
import NavBar from './components/NavBar'

interface AppState {
  contextRef: any
}

class App extends Component<{}, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      contextRef: null
    }
  }

  public render() {
    const { contextRef } = this.state
    const offsetPx = 10
    return (
      <div style={{ backgroundColor: '#DFDCDC', padding: `${offsetPx}px` }}>
        <Router>
          <Grid centered columns={2}>
            <Grid.Column>
              <div ref={this.handleRef}>
                <Segment>
                  <Rail className={styles.rail} position="left">
                    <Sticky context={contextRef} offset={offsetPx}>
                      <NavBar />
                    </Sticky>
                  </Rail>
                  <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/projects" component={HomePage} />
                    <Route path="/contact" component={HomePage} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </Segment>
              </div>
            </Grid.Column>
          </Grid>
        </Router>
      </div>
    )
  }

  private handleRef = contextRef => this.setState({ contextRef })
}

export default App
