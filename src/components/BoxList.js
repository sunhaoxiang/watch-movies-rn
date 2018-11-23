import React, { PureComponent } from 'react'
import {
  View,
  Text,
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import BoxItem from './BoxItem'
import LoadingSpin from './LoadingSpin'
import NoData from './NoData'
import MovieDetail from '../views/MovieDetail'
import apiKey from '../config/apiKey'
import isIPhoneX from '../utils/isIPhoneX'
import styles from '../styles/Main'

class BoxList extends PureComponent {
  static defaultProps = {
    requestUrl: ''
  }

  static propTypes = {
    requestUrl: PropTypes.string.isRequired
  }

  state = {
    movies: [], // 电影列表
    loading: true, // 加载状态
    refreshing: true // 刷新状态
  }

  // 请求电影列表数据
  fetchBoxList = () => {
    const { requestUrl } = this.props
    fetch(`${requestUrl}?apikey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        const { subjects } = data
        this.setState({
          movies: subjects,
          loading: false,
          refreshing: false
        })
      })
  }

  // 渲染电影列表
  renderBoxListHandler = ({item}) => {
    return (
      <BoxItem
        itemData={item}
        onItemPress={this.showBoxDetailHandler}
      />
    )
  }

  // 生成列表的key
  keyExtractorHandler = item => item.subject.id

  // 上滑刷新数据
  refreshHandler = () => {
    this.setState({
      refreshing: true,
      start: 0
    }, this.fetchBoxList)
  }

  // 点击电影详情
  showBoxDetailHandler = (data) => {
    const { title } = data
    this.props.navigator.push({
      title: title,
      component: MovieDetail,
      passProps: {
        detailData: data
      }
    })
  }

  // 加载时的loading效果
  renderFooterHandler = () => {
    return (
      <View style={styles.loadMoreWrapper}>
        <Text style={styles.loadMoreText}>没有可以显示的内容了 : )</Text>
      </View>
    )
  }

  componentDidMount () {
    // 开始请求电影列表数据
    this.fetchBoxList()
  }

  render () {
    const {
      loading,
      refreshing,
      movies
    } = this.state

    // 电影列表数据未加载完成
    if (loading) {
      return (
        <LoadingSpin />
      )
    }

    // 电影列表数据加载完成
    if (movies.length !== 0) {
      return (
        <FlatList
          style={isIPhoneX() ? styles.headerSpaceIPhoneX : styles.headerSpace}
          data={movies}
          ListFooterComponent={this.renderFooterHandler}
          renderItem={this.renderBoxListHandler}
          keyExtractor={this.keyExtractorHandler}
          refreshing={refreshing}
          onRefresh={this.refreshHandler}
        />
      )
    } else {
      return (
        <NoData />
      )
    }
  }
}

export default BoxList
