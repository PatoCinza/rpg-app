import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { Router } from 'Router'

// avoding bug https://github.com/yannickcr/eslint-plugin-react/issues/2156
global.React = {
  Fragment
}

const app = (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
