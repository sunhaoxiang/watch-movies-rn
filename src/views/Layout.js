import React, { Component } from 'react'
import {
  TabBarIOS
} from 'react-native'
import USBox from './USBox'
import TOP250 from './TOP250'

class Layout extends Component {
  state = {
    selectedTab: 'usBox'
  }

  render () {
    const { selectedTab } = this.state

    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="featured"
          selected={selectedTab === 'usBox'}
          onPress={() => {
            this.setState({
              selectedTab: 'usBox'
            })
          }}
        >
          <USBox />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="most-viewed"
          selected={selectedTab === 'top250'}
          onPress={() => {
            this.setState({
              selectedTab: 'top250'
            })
          }}
        >
          <TOP250 />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default Layout
