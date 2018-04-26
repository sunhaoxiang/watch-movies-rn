import React from 'react'
import { StyleSheet, Text, View, ListView, FlatList } from 'react-native'

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: []
    }

    this.fetchData()
  }

  fetchData = () => {
    fetch(REQUEST_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.subjects
        })
      })
  }

  _keyExtractor = (item, index) => item.id

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.movies}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae7ff',
    paddingTop: 130
  },
  title: {
    fontSize: 26,
    color: '#6435c9',
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 2,
    lineHeight: 33,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300'
  },
  itemText: {
    color: '#6435c9'
  }
})
