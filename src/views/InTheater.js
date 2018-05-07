import React, { PureComponent } from 'react'
import MovieList from '../components/MovieList'

class InTheater extends PureComponent {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/in_theaters'
  }

  render () {
    const { requestUrl } = this.state

    return (
      <MovieList
        requestUrl={requestUrl}
        showYear={false}
        navigator={this.props.navigator}
      />
    )
  }
}

export default InTheater
