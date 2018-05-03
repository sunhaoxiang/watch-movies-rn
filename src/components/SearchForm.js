import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableHighlight
} from 'react-native'
import SearchResult from '../views/SearchResult'
import isIphoneX from '../utils/isIphoneX'
import styles from '../styles/Main'

class SearchForm extends Component {
  state = {
    requestUrl: 'https://api.douban.com/v2/movie/search',
    query: '',
    loading: false,
    opacity: 0,
    searchHistory: ['fargo', 'matrix', 'up']
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

    this.saveSearchHistoryHandler()

    this.setState({
      loading: true,
      opacity: 1
    })

    fetch(`${requestUrl}?q=${query}&count=20&start=0`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          opacity: 0
        })
        const {
          title
        } = data
        navigator.push({
          title: title,
          component: SearchResult,
          passProps: {
            searchData: {
              query,
              ...data
            }
          }
        })
      })

  }

  // 储存搜索历史
  saveSearchHistoryHandler = () => {
    const {
      query,
      searchHistory
    } = this.state
    const newSearchHistory = [...new Set([query, ...searchHistory])]

    this.setState({
      searchHistory: newSearchHistory
    })
  }

  // 从历史记录搜索
  SearchHistoryHandler = item => {
    this.setState({
      query: item
    }, this.fetchSearchText)
  }

  // 渲染搜索历史列表
  renderSearchHistoryListHandler = ({item}) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={() => {this.SearchHistoryHandler(item)}}
      >
        <View style={styles.item}>
          <View style={styles.itemContent}>
            <Text style={styles.searchText}>{item}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  keyExtractorHandler = item => item

  render () {
    const {
      loading,
      opacity,
      searchHistory
    } = this.state

    return (
      <View style={[styles.container, isIphoneX() ? styles.headerSpaceIphoneX : styles.headerSpace]}>
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
        <Text style={styles.searchHeader}>搜索历史</Text>
        <FlatList
          data={searchHistory}
          renderItem={this.renderSearchHistoryListHandler}
          keyExtractor={this.keyExtractorHandler}
        />
      </View>
    )
  }
}

export default SearchForm
