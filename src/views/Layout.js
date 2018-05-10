import React, { PureComponent } from 'react'
import {
  View,
  StatusBar,
  NavigatorIOS,
  TabBarIOS
} from 'react-native'
import InTheater from './InTheater'
import ComingSoon from './ComingSoon'
import USBox from './USBox'
import TOP250 from './TOP250'
import Search from './Search'
import styles from '../styles/Main'
import iconFire from '../assets/tabBar/fire-normal.png'
import iconFireActive from '../assets/tabBar/fire-active.png'
import iconNew from '../assets/tabBar/new-normal.png'
import iconNewActive from '../assets/tabBar/new-active.png'
import iconMovie from '../assets/tabBar/movie-normal.png'
import iconMovieActive from '../assets/tabBar/movie-active.png'
import iconStar from '../assets/tabBar/star-normal.png'
import iconStarActive from '../assets/tabBar/star-active.png'
import iconSearch from '../assets/tabBar/search-normal.png'
import iconSearchActive from '../assets/tabBar/search-active.png'

class Layout extends PureComponent {
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
          icon={iconFire}
          selectedIcon={iconFireActive}
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
          icon={iconNew}
          selectedIcon={iconNewActive}
          title="即将上映"
          selected={selectedTab === 'comingSoon'}
          onPress={() => {
            this.setState({
              selectedTab: 'comingSoon'
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
                title: '即将上映',
                component: ComingSoon
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
          icon={iconMovie}
          selectedIcon={iconMovieActive}
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
          icon={iconStar}
          selectedIcon={iconStarActive}
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
          icon={iconSearch}
          selectedIcon={iconSearchActive}
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
