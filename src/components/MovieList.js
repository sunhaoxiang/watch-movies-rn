import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import LoadingSpin from './LoadingSpin'
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
    loading: true // 加载状态
  }

  // 请求电影列表数据
  fetchMovieList = () => {
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
  renderMovieListHandler = ({item}) => {
  	return (
  		<MovieItem itemData={item} />
	  )
  }

  // 生成列表的key
  keyExtractorHandler = item => item.id

	componentDidMount () {
  	// 开始请求电影列表数据
		this.fetchMovieList()
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
        renderItem={this.renderMovieListHandler}
        keyExtractor={this.keyExtractorHandler}
      />
    )
  }
}

export default MovieList
