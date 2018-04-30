import React, { Component } from 'react'
import MovieList from '../components/MovieList'

class InTheater extends Component {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/in_theaters'
  }

  render () {
    const { requestUrl } = this.state

    return (
      <MovieList
        requestUrl={requestUrl}
        navigator={this.props.navigator}
      />
    )
  }
}

export default InTheater
