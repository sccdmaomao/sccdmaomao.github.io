import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './404'
import Contact from './Contact'
import Home from './Home'
import Project from './Project'

const Routes: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
