import React from 'react'
import MovieList from '../components/MovieList'
import { InTheaterUrl } from '../config/requestUrl'

const InTheater = props => {
  const { navigator } = props

  return (
    <MovieList
      requestUrl={InTheaterUrl}
      showYear={false}
      navigator={navigator}
    />
  )
}

export default InTheater
