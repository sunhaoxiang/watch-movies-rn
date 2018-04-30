import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import Detail from '../components/Detail'
import LoadingSpin from '../components/LoadingSpin'
import styles from '../styles/Main'

class MovieDetail extends Component {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/subject', // 电影详情API
    detail: {}, // 电影详情
    loading: true // 加载状态
  }

  // 请求电影详情数据
  fetchMovieDetail = () => {
    const { requestUrl } = this.state
    const {
      detailData: {
        id
      }
    } = this.props
    fetch(`${requestUrl}/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          detail: data,
          loading: false
        })
      })
  }

  componentDidMount () {
    // 开始请求电影详情数据
    this.fetchMovieDetail()
  }

  render () {
    const {
      loading,
      detail
    } = this.state

    // 电影详情数据未加载完成
    if (loading) {
      return (
        <LoadingSpin />
      )
    }

    // 电影详情数据加载完成
    return (
      <Detail detail={detail} />
    )
  }
}

export default MovieDetail
