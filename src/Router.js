import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { App } from 'app/App/App'

export const Router = () => (
  <Switch>
    <Route path='/' component={App} exact={true} />
  </Switch>
)
