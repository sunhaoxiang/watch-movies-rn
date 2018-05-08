import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import Rating from './Rating'
import styles from '../styles/Main'

const BoxItem = props => {
  const {
    itemData: {
      box,
      subject,
      subject: {
        images: { large },
        title,
        original_title,
        genres,
        rating: {
          average,
          stars
        }
      }
    },
    onItemPress
  } = props

  const genresShow = genres.join(' / ')
  const boxShow = box.toString().length < 9 ? `${(box / 10000).toFixed(0)} 万` : `${(box / 100000000).toFixed(1)} 亿`

  return (
    <TouchableHighlight
      underlayColor="rgba(34, 26, 38, 0.1)"
      onPress={() => {
        onItemPress(subject)
      }}
    >
      <View style={styles.item}>
        <Image
          source={{uri: large}}
          style={styles.itemImage}
        />
        <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>{title}</Text>
          <Text style={styles.itemOriginalTitle}>{original_title}</Text>
          <Text style={styles.itemMeta}>{genresShow}</Text>
          <Rating
            average={average}
            stars={stars}
          />
          <Text style={styles.boxText}>{boxShow}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default BoxItem
