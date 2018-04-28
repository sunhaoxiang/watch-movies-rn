import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import styles from '../styles/Main'

export default class MovieList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: [], // 请求到的电影列表
      loading: true // 数据加载状态
    }

    this.fetchMovieList()
  }

  // 请求数据
  fetchMovieList = () => {
    fetch(this.props.requestUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.subjects,
          loading: false
        })
      })
  }

  // 渲染列表
  renderMovieListHandler = ({item}) => (
    <View style={styles.item}>
      <Image 
        source={{uri: item.images.large}}
        style={styles.itemImage}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>{item.title}</Text>
        <Text style={styles.itemMeta}>
          {item.original_title} ({item.year})
        </Text>
        <Text style={styles.redText}>{item.rating.average}</Text>
      </View>
    </View>
  )

  // 生成列表的key
  keyExtractorHandler = (item, index) => item.id

  render () {
    // 数据未渲染完成
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中……</Text>
          </View>
        </View>
      )
    }

    // 数据渲染完成
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.movies}
          renderItem={this.renderMovieListHandler}
          keyExtractor={this.keyExtractorHandler}
        />
      </View>
    )
  }
}
