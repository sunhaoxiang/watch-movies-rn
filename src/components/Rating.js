import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import styles from "../styles/Main"
import starFull from '../assets/images/stars/star-full.png'
import starHalf from '../assets/images/stars/star-half.png'
import starEmpty from '../assets/images/stars/star-empty.png'

const Rating = props => {
  const {
    average,
    stars
  } = props

  const starsRenderHandler = () => {
    const total = 5
    const statsData = []
    let full, half, empty
    full = parseInt(stars[0]) - 1

    if (stars[1] === '5') {
      full++
      half = 0
      empty = total - full
    } else {
      if (stars[0] !== '0') {
        half = 1
        empty = total - full - half
      } else {
        half = 0
        empty = 5
      }
    }

    for (let i = 0; i < full; i++) {
      statsData.push('full')
    }

    if (half) {
      statsData.push('half')
    }

    for (let i = 0; i < empty; i++) {
      statsData.push('empty')
    }

    return statsData.map((item, index) => {
      if (item === 'full') {
        return (
          <Image
            source={starFull}
            key={index}
          />
        )
      } else if (item === 'half') {
        return (
          <Image
            source={starHalf}
            key={index}
          />
        )
      } else {
        return (
          <Image
            source={starEmpty}
            key={index}
          />
        )
      }
    })
  }

  return (
    <View style={styles.averageWrapper}>
      <View style={styles.ratingTextWrapper}>
        <Text style={styles.ratingText}>{average ? average.toFixed(1) : '暂无'}</Text>
      </View>
      {starsRenderHandler()}
    </View>
  )
}

export default Rating
