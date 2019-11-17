import React from 'react'
import { render } from 'react-dom'
import './style.css'

import { Films } from './components'

const App = () => (
  <>
    <h1>Star Wars</h1>
    <hr />
    <Films />
  </>
)

render(<App />, document.getElementById('root'))
