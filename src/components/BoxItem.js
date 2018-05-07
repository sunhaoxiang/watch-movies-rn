import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
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
        rating: { average }
      }
    },
    onItemPress
  } = props

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
          <Text style={styles.itemMeta}>{original_title}</Text>
          <Text style={styles.redText}>{boxShow}</Text>
          <Text style={styles.yellowText}>{average ? average.toFixed(1) : '暂无评分'}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default BoxItem
