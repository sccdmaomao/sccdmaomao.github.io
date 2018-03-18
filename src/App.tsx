import React, { Component } from 'react'
import { HomePage, NotFound } from 'routes'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grid, Rail, Segment, Sticky } from 'semantic-ui-react'

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

  private handleRef = contextRef => this.setState({ contextRef })

  public render() {
    const { contextRef } = this.state
    return (
      <div style={{ backgroundColor: '#DFDCDC' }}>
        <Router>
          <Grid centered columns={3}>
            <Grid.Column>
              <div ref={this.handleRef}>
                <Segment>
                  <Rail position="left">
                    <Sticky context={contextRef}>
                      <Segment>hi</Segment>
                    </Sticky>
                  </Rail>

                  <Rail position="right">
                    <Sticky context={contextRef}>hi2</Sticky>
                  </Rail>
                </Segment>
              </div>
            </Grid.Column>
          </Grid>

          {/* <Grid centered columns={2}>
            <Grid.Column>
              <div ref={this.handleRef}>
                <Rail position="left">
                  <Sticky context={contextRef}>
                    <NavBar />
                  </Sticky>
                </Rail>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/projects" component={HomePage} />
                  <Route path="/contact" component={HomePage} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </Grid.Column>
          </Grid> */}
        </Router>
      </div>
    )
  }
}

export default App
