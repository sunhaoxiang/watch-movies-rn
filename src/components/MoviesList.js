import React, { Component } from 'react'
import {
  View,
  Text,
  Image, 
  FlatList
} from 'react-native'
import styles from '../styles/Main'

class MoviesList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: [], // 请求到的电影列表
      loading: true // 数据加载状态
    }
  }

  // 请求列表数据
  fetchMoviesList = () => {
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

  // 渲染列表
  renderMoviesListHandler = ({item}) => {
		const {
			images: { large },
			title,
			original_title,
			year,
			rating: { average }
		} = item

	  return (
		  <View style={styles.item}>
			  <Image
				  source={{uri: large}}
				  style={styles.itemImage}
			  />
			  <View style={styles.itemContent}>
				  <Text style={styles.itemHeader}>{title}</Text>
				  <Text style={styles.itemMeta}>
					  {`${original_title} (${year})`}
				  </Text>
				  <Text style={styles.redText}>{average}</Text>
			  </View>
		  </View>
	  )
  }

  // 生成列表的key
  keyExtractorHandler = (item) => {
  	const { id } = item

	  return id
  }

	componentDidMount () {
  	// 开始请求列表数据
		this.fetchMoviesList()
	}

  render () {
  	const {
  		loading,
		  movies
  	} = this.state

    // 数据未加载完成
    if (loading) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中……</Text>
          </View>
        </View>
      )
    }

    // 数据加载完成
    return (
      <View style={styles.container}>
        <FlatList 
          data={movies}
          renderItem={this.renderMoviesListHandler}
          keyExtractor={this.keyExtractorHandler}
        />
      </View>
    )
  }
}

export default MoviesList
