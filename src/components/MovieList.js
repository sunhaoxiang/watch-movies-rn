import React, { Component } from 'react'

import { Text, View, Image, FlatList } from 'react-native'
import styles from '../styles/Main'

export default class MovieList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: [],
      loading: true
    }

    this.fetchData()
  }

  fetchData = () => {
    fetch(this.props.requestUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.subjects,
          loading: false
        })
      })
  }

  _renderItem = ({item}) => (
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

  _keyExtractor = (item, index) => item.id

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中……</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.movies}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}
