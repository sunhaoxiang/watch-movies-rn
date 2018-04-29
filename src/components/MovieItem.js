import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import styles from '../styles/Main'

const MovieItem = (props) => {
  const {
    itemData: {
      images: { large },
      title,
      original_title,
      year,
      rating: { average }
    }
  } = props

  return (
    <View style={styles.item}>
      <Image
        source={{uri: large}}
        style={styles.itemImage}
      />
      <View style={styles.itemContent}>
      <Text style={styles.itemHeader}>{title}</Text>
        <Text style={styles.itemMeta}>
          {`${original_title} (${year})`}
        </Text>
        <Text style={styles.redText}>{average}</Text>
      </View>
    </View>
  )
}

export default MovieItem
