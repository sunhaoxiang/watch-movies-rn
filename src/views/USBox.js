import React, { PureComponent } from 'react'
import BoxList from '../components/BoxList'

class USBox extends PureComponent {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/us_box'
  }

  render () {
    const { requestUrl } = this.state

    return (
      <BoxList
        requestUrl={requestUrl}
        navigator={this.props.navigator}
      />
    )
  }
}

export default USBox
