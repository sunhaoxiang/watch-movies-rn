import React, { Component } from 'react'
import {
  TabBarIOS,
  NavigatorIOS
} from 'react-native'
import InTheater from './InTheater'
import USBox from './USBox'
import TOP250 from './TOP250'
import styles from '../styles/Main'
import icons from '../assets/Icons'

class Layout extends Component {
  state = {
    selectedTab: 'inTheater'
  }

  render () {
    const { selectedTab } = this.state

    return (
      <TabBarIOS
        barTintColor="darkslateblue"
        tintColor="white"
      >
        <TabBarIOS.Item
          icon={{
            uri: icons.fire,
            scale: 4.6
          }}
          selectedIcon={{
            uri: icons.fireActive,
            scale: 4.6
          }}
          title="正在热映"
          selected={selectedTab === 'inTheater'}
          onPress={() => {
            this.setState({
              selectedTab: 'inTheater'
            })
          }}
        >
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: '正在热映',
              component: InTheater
            }}
            shadowHidden={true}
            barTintColor="darkslateblue"
            titleTextColor="rgba(255, 255, 255, 0.8)"
            tintColor="rgba(255, 255, 255, 0.8)"
            translucent={true}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{
            uri: icons.list,
            scale: 4.6
          }}
          selectedIcon={{
            uri: icons.listActive,
            scale: 4.6
          }}
          title="北美票房榜"
          selected={selectedTab === 'usBox'}
          onPress={() => {
            this.setState({
              selectedTab: 'usBox'
            })
          }}
        >
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: '北美票房榜',
              component: USBox
            }}
            shadowHidden={true}
            barTintColor="darkslateblue"
            titleTextColor="rgba(255, 255, 255, 0.8)"
            tintColor="rgba(255, 255, 255, 0.8)"
            translucent={true}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{
            uri: icons.star,
            scale: 4.6
          }}
          selectedIcon={{
            uri: icons.starActive,
            scale: 4.6
          }}
          title="TOP250"
          selected={selectedTab === 'top250'}
          onPress={() => {
            this.setState({
              selectedTab: 'top250'
            })
          }}
        >
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'TOP250',
              component: TOP250
            }}
            shadowHidden={true}
            barTintColor="darkslateblue"
            titleTextColor="rgba(255, 255, 255, 0.8)"
            tintColor="rgba(255, 255, 255, 0.8)"
            translucent={true}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default Layout
