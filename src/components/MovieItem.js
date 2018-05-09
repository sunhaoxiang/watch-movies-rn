import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import Rating from './Rating'
import styles from '../styles/Main'

const MovieItem = props => {
  const {
    itemData,
    itemData: {
      images: { large },
      title,
      original_title,
      year,
      genres,
      rating: {
        average,
        stars
      }
    },
    showYear,
    onItemPress
  } = props

  const originalTitle = showYear ? `${original_title} (${year})` : original_title

  const genresShow = genres.join(' / ')

  return (
    <TouchableHighlight
      underlayColor="rgba(34, 26, 38, 0.1)"
      onPress={() => {
        onItemPress(itemData)
      }}
    >
      <View style={styles.item}>
        <Image
          source={{uri: large}}
          style={styles.itemImage}
        />
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemOriginalTitle}>{originalTitle}</Text>
          <Text style={styles.itemMeta}>{genresShow}</Text>
          <Rating
            average={average}
            stars={stars}
          />
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default MovieItem
