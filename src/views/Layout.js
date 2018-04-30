import React, { Component } from 'react'
import {
  TabBarIOS
} from 'react-native'
import InTheater from './InTheater'
import USBox from './USBox'
import TOP250 from './TOP250'

class Layout extends Component {
  state = {
    selectedTab: 'inTheater'
  }

  render () {
    const { selectedTab } = this.state

    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="most-viewed"
          selected={selectedTab === 'inTheater'}
          onPress={() => {
            this.setState({
              selectedTab: 'inTheater'
            })
          }}
        >
          <InTheater />
        </TabBarIOS.Item>
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
