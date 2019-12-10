import React from 'react'

import AirContainer from '../containers/AirContainer'
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Header />
        <Switch>
          <Route path="/" component={AirContainer} />
        </Switch>
      </Container>
    </Router>
  )
}

export default Routes
