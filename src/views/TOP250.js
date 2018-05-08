import React from 'react'
import MovieList from '../components/MovieList'
import { TOP250Url } from '../config/requestUrl'

const TOP250 = props => {
  const { navigator } = props

  return (
    <MovieList
      requestUrl={TOP250Url}
      showYear={true}
      navigator={navigator}
    />
  )
}

export default TOP250
