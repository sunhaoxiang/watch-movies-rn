import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import BoxItem from './BoxItem'
import LoadingSpin from './LoadingSpin'
import styles from '../styles/Main'
import MovieDetail from "../views/MovieDetail"

class BoxList extends Component {
  static defaultProps = {
    requestUrl: ''
  }

  static propTypes = {
    requestUrl: PropTypes.string.isRequired
  }

  state = {
    movies: [], // 电影列表
    loading: true // 加载状态
  }

  // 请求电影列表数据
  fetchBoxList = () => {
    const { requestUrl } = this.props
    fetch(requestUrl)
      .then(res => res.json())
      .then(data => {
        const { subjects } = data
        this.setState({
          movies: subjects,
          loading: false
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

  componentDidMount () {
    // 开始请求电影列表数据
    this.fetchBoxList()
  }

  render () {
    const {
      loading,
      movies
    } = this.state

    // 电影列表数据未加载完成
    if (loading) {
      return (
        <LoadingSpin />
      )
    }

    // 电影列表数据加载完成
    return (
      <FlatList
        style={styles.headerSpace}
        data={movies}
        renderItem={this.renderBoxListHandler}
        keyExtractor={this.keyExtractorHandler}
      />
    )
  }
}

export default BoxList