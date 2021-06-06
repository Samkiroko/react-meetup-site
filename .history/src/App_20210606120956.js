import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from './components/layout/Layout'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/NewMeetup'

function App() {
  return (
    <div>
      <Layout></Layout>
      <MainNavigation />
      <Switch>
        {' '}
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  )
}

export default App
