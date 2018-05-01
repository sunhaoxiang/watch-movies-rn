import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'

class Search extends Component {
  render () {
    return (
      <SearchForm navigator={this.props.navigator} />
    )
  }
}

export default Search
