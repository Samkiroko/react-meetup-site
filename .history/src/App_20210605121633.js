import React from 'react'
import { Route } from 'react-router'
import AllMeetups from './pages/AllMeetups'

function App() {
  return (
    <div>
      <Route path='/'>
        <AllMeetups></AllMeetups>
      </Route>
    </div>
  )
}

export default App
