import React from 'react';
import { Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"

import { Route } from "react-router-dom"
import Header from "./components/Header"
import MoviesPage from "./components/pages/MoviesPage.js"
import HomePage from "./components/pages/HomePage.js"
import NewMoviePage from "./components/pages/NewMoviePage.js"

class App extends React.Component {
  render () {
    return (
      <div>
        <Header></Header>

        <Container text>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/movies" component={MoviesPage} exact></Route>
          <Route path="/movies/new" component={NewMoviePage} eact></Route>
          <Route path="/movie/:_id" component={NewMoviePage} eact></Route>
        </Container>

      </div>
    );
  }
}

export default App;
