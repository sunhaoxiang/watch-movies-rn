import React, { Component } from 'react'
import MovieList from '../components/MovieList'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestUrl: 'https://api.douban.com/v2/movie/top250'
    }
  }

  render () {
    return (
      <MovieList requestUrl={this.state.requestUrl} />
    )
  }
}
