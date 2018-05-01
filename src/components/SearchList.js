import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import MovieDetail from '../views/MovieDetail'

class SearchList extends Component {
  static defaultProps = {
    searchData: []
  }

  static propTypes = {
    searchData: PropTypes.array.isRequired
  }

  state = {
    movies: [], // 电影列表
    loading: true // 加载状态
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

  render () {
    const { searchData } = this.props

    return (
      <FlatList
        data={searchData}
        renderItem={this.renderMovieListHandler}
        keyExtractor={this.keyExtractorHandler}
      />
    )
  }
}

export default SearchList
