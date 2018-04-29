import React, { Component } from 'react'
import MoviesList from '../components/MoviesList'

export default class TOP250 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestUrl: 'https://api.douban.com/v2/movie/top250'
    }
  }

  render () {
    return (
      <MoviesList requestUrl={this.state.requestUrl} />
    )
  }
}
