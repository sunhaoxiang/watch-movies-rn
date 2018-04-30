import React, { Component } from 'react'
import MovieList from '../components/MovieList'

class TOP250 extends Component {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/top250'
  }

  render () {
    const { requestUrl } = this.state

    return (
      <MovieList requestUrl={requestUrl} />
    )
  }
}

export default TOP250
