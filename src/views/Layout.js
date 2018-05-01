import React, { Component } from 'react'
import {
  View,
  StatusBar,
  NavigatorIOS,
  TabBarIOS
} from 'react-native'
import InTheater from './InTheater'
import USBox from './USBox'
import TOP250 from './TOP250'
import Search from './Search'
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
        tintColor="#e5120c"
        unselectedItemTintColor="#ccc"
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
          <View style={styles.container}>
            <StatusBar
              backgroundColor="blue"
              barStyle="light-content"
            />
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: '正在热映',
                component: InTheater
              }}
              shadowHidden={true}
              barTintColor="#e5120c"
              titleTextColor="#fff"
              tintColor="#fff"
              translucent={true}
            />
          </View>
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
          <View style={styles.container}>
            <StatusBar
              barStyle="light-content"
            />
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: '北美票房榜',
                component: USBox
              }}
              shadowHidden={true}
              barTintColor="#e5120c"
              titleTextColor="#fff"
              tintColor="#fff"
              translucent={true}
            />
          </View>
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
          <View style={styles.container}>
            <StatusBar
              barStyle="light-content"
            />
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: 'TOP250',
                component: TOP250
              }}
              shadowHidden={true}
              barTintColor="#e5120c"
              titleTextColor="#fff"
              tintColor="#fff"
              translucent={true}
            />
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{
            uri: icons.search,
            scale: 4.6
          }}
          selectedIcon={{
            uri: icons.search,
            scale: 4.6
          }}
          title="搜索"
          selected={selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            })
          }}
        >
          <View style={styles.container}>
            <StatusBar
              barStyle="light-content"
            />
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: '搜索',
                component: Search
              }}
              shadowHidden={true}
              barTintColor="#e5120c"
              titleTextColor="#fff"
              tintColor="#fff"
              translucent={true}
            />
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default Layout
