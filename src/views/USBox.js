import React, { Component } from 'react'
import BoxList from '../components/BoxList'

class USBox extends Component {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/us_box'
  }

  render () {
    const { requestUrl } = this.state

    return (
      <BoxList requestUrl={requestUrl} />
    )
  }
}

export default USBox
