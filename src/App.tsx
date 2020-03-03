import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RouterOutlet from './RouterOutlet'
import Layout from './components/Layout';

export default function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Router>
          <Layout>
            <RouterOutlet />
          </Layout>
        </Router>
      </header>
    </div>
  )
}
