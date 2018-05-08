import React from 'react'
import BoxList from '../components/BoxList'
import { USBoxUrl } from '../config/requestUrl'

const USBox = props => {
  const { navigator } = props

  return (
    <BoxList
      requestUrl={USBoxUrl}
      navigator={navigator}
    />
  )
}

export default USBox
