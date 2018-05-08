import React, { PureComponent } from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import MovieDetail from '../views/MovieDetail'
import { searchUrl } from '../config/requestUrl'
import styles from "../styles/Main"

class SearchList extends PureComponent {
  static defaultProps = {
    searchData: {},
    query: ''
  }

  static propTypes = {
    searchData: PropTypes.object.isRequired,
    query: PropTypes.string.isRequired
  }

  state = {
    query: '',
    movies: [],
    count: 20,
    start: 0,
    total: 0,
    readyToFetch: true
  }

  // 渲染电影列表
  renderSearchListHandler = ({item}) => {
    return (
      <MovieItem
        itemData={item}
        onItemPress={this.showMovieDetailHandler}
      />
    )
  }

  // 生成列表的key
  keyExtractorHandler = item => item.id

  // 点击电影详情
  showMovieDetailHandler = (data) => {
    const { title } = data
    this.props.navigator.push({
      title,
      component: MovieDetail,
      passProps: {
        detailData: data
      }
    })
  }

  // 滑动到底部时加载新数据
  endReachedHandler = () => {
    const {
      start,
      total
    } = this.state

    if (start < total) {
      this.loadMore()
    }
  }

  // 加载更多
  loadMore = () => {
    const {
      query,
      count,
      start,
      readyToFetch
    } = this.state

    // 防止重复请求
    if (!readyToFetch) {
      return
    }

    this.setState({
      readyToFetch: false
    })

    fetch(`${searchUrl}?q=${query}&count=${count}&start=${start}`)
      .then(res => res.json())
      .then(data => {
        const { movies } = this.state
        const { subjects } = data
        const newStart = start + count

        this.setState({
          movies: [...movies, ...subjects],
          start: newStart,
          readyToFetch: true
        })
      })
  }

  componentDidMount () {
    const {
      searchData: {
        query,
        count,
        start,
        total,
        subjects
      }
    } = this.props

    const newStart = start + count

    this.setState({
      query,
      start: newStart,
      total,
      movies: subjects
    })
  }

  // 加载时的loading效果
  renderFooterHandler = () => {
    const {
      start,
      total
    } = this.state

    if (start < total) {
      return (
        <View style={styles.loadMoreWrapper}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <View style={styles.loadMoreWrapper}>
          <Text style={styles.loadMoreText}>没有可以显示的内容了 : )</Text>
        </View>
      )
    }
  }

  render () {
    const {
      movies,
      count
    } = this.state

    return (
      <FlatList
        data={movies}
        initialNumToRender={count}
        ListFooterComponent={this.renderFooterHandler}
        renderItem={this.renderSearchListHandler}
        keyExtractor={this.keyExtractorHandler}
        onEndReached={this.endReachedHandler}
      />
    )
  }
}

export default SearchList
