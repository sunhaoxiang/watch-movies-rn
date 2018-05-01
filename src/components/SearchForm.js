import React, { Component } from 'react'
import {
  View,
  TextInput,
  ActivityIndicator
} from 'react-native'
import SearchResult from '../views/SearchResult'
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
      <View style={styles.headerSpace}>
        <View style={{
          paddingTop: 7,
          paddingLeft: 7,
          paddingRight: 7,
          borderColor: "rgba(100, 53, 201, 0.1)",
          borderBottomWidth: 1
        }}>
          <TextInput
            style={{height: 50}}
            placeholder="搜索..."
            clearButtonMode="while-editing"
            returnKeyType="search"
            enablesReturnKeyAutomatically={true}
            onChangeText={(query) => {this.changeTextHandler(query)}}
            onSubmitEditing={this.fetchSearchText}
          />
          <ActivityIndicator
            size="small"
            color="#6435c9"
            animating={loading}
            style={{
              position: 'absolute',
              top: 20,
              right: 10,
              opacity
            }}
          />
        </View>
      </View>
    )
  }
}

export default SearchForm
