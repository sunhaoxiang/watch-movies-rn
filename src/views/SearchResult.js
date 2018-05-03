import React from 'react'
import SearchList from '../components/SearchList'

SearchResult = props => {
  return (
    <SearchList
      searchData={props.searchData}
      navigator={props.navigator}
    />
  )
}

export default SearchResult
