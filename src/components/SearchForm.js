import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from '../styles/Main'

class SearchForm extends Component {
  render () {
    return (
      <View style={styles.headerSpace}>
        <Text>Search1</Text>
        <Text>Search2</Text>
        <Text>Search3</Text>
        <Text>Search4</Text>
        <Text>Search5</Text>
        <Text>Search6</Text>
      </View>
    )
  }
}

export default SearchForm
