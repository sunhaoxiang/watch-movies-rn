import React from 'react'
import MovieList from '../components/MovieList'
import { ComingSoonUrl } from '../config/requestUrl'

const ComingSoon = props => {
  const { navigator } = props

  return (
    <MovieList
      requestUrl={ComingSoonUrl}
      showYear={false}
      navigator={navigator}
    />
  )
}

export default ComingSoon
