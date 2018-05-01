import React, { Component } from 'react'
import {
  View,
  TextInput,
  ActivityIndicator
} from 'react-native'
import SearchResult from '../views/SearchResult'
import isIphoneX from '../utils/isIphoneX'
import styles from '../styles/Main'

class SearchForm extends Component {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/search',
    query: '',
    loading: false,
    opacity: 0
  }

  // 获取用户输入的内容
  changeTextHandler = (query) => {
    this.setState({
      query
    })
  }

  // 请求用户搜索的数据
  fetchSearchText = () => {
    const {
      requestUrl,
      query
    } = this.state
    const { navigator } = this.props

    this.setState({
      loading: true,
      opacity: 1
    })

    fetch(`${requestUrl}?q=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          opacity: 0
        })
        const {
          title,
          subjects
        } = data
        navigator.push({
          title: title,
          component: SearchResult,
          passProps: {
            searchData: subjects
          }
        })
      })

  }

  render () {
    const {
      loading,
      opacity
    } = this.state

    return (
      <View style={isIphoneX() ? styles.headerSpaceIphoneX : styles.headerSpace}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="请输入要搜索的内容..."
            returnKeyType="search"
            enablesReturnKeyAutomatically={true}
            onChangeText={(query) => {this.changeTextHandler(query)}}
            onSubmitEditing={this.fetchSearchText}
          />
          <ActivityIndicator
            size="small"
            color="#e5120c"
            animating={loading}
            style={[styles.inputLoading, {opacity}]}
          />
        </View>
      </View>
    )
  }
}

export default SearchForm
