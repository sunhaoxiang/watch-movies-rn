import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import LoadingSpin from './LoadingSpin'
import MovieDetail from '../views/MovieDetail'
import isIphoneX from '../utils/isIphoneX'
import styles from '../styles/Main'

class MovieList extends Component {
  static defaultProps = {
    requestUrl: ''
  }

  static propTypes = {
    requestUrl: PropTypes.string.isRequired
  }

  state = {
    movies: [], // 电影列表
    loading: true, // 加载状态
    count: 20,
    start: 0,
    total: 0
  }

  // 请求电影列表数据
  fetchMovieList = () => {
	  const { requestUrl } = this.props

    const {
	    count,
      start
    } = this.state

    fetch(`${requestUrl}?count=${count}&start=${start}`)
      .then(res => res.json())
      .then(data => {
      	const {
      	  subjects,
          total
      	} = data
        const newStart = start + count

        this.setState({
          movies: subjects,
          loading: false,
          start: newStart,
          total,
          readyToFetch: true
        })
      })
  }

  // 渲染电影列表
  renderMovieListHandler = ({item}) => {
  	return (
  		<MovieItem
        itemData={item}
        onItemPress={this.showMovieDetailHandler}
      />
	  )
  }

  // 生成列表的key
  keyExtractorHandler = item => item.id

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
    const { requestUrl } = this.props

    const {
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

    fetch(`${requestUrl}?count=${count}&start=${start}`)
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

	componentDidMount () {
  	// 开始请求电影列表数据
		this.fetchMovieList()
	}

  render () {
  	const {
  		loading,
		  movies,
      count
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
        style={isIphoneX() ? styles.headerSpaceIphoneX : styles.headerSpace}
        data={movies}
        initialNumToRender={count}
        ListFooterComponent={this.renderFooterHandler}
        renderItem={this.renderMovieListHandler}
        keyExtractor={this.keyExtractorHandler}
        onEndReached={this.endReachedHandler}
      />
    )
  }
}

export default MovieList
