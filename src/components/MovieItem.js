import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import styles from '../styles/Main'

const MovieItem = (props) => {
  const {
    itemData,
    itemData: {
      images: { large },
      title,
      original_title,
      year,
      rating: { average }
    },
    onItemPress
  } = props

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
          <Text style={styles.itemHeader}>{title}</Text>
          <Text style={styles.itemMeta}>{`${original_title} (${year})`}</Text>
          <Text style={styles.redText}>{average ? average.toFixed(1) : '暂无评分'}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default MovieItem
