import React, { PureComponent } from 'react'
import MovieList from '../components/MovieList'

class TOP250 extends PureComponent {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/top250'
  }

  render () {
    const { requestUrl } = this.state

    return (
      <MovieList
        requestUrl={requestUrl}
        showYear={true}
        navigator={this.props.navigator}
      />
    )
  }
}

export default TOP250
