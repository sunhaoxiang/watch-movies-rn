import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import styles from '../styles/Main'
import iconNoData from '../assets/images/no-data.png'

const NoData = () => {
  return(
    <View style={styles.notFoundTextWrapper}>
      <Image
        source={iconNoData}
        style={styles.notFoundImage}
      />
      <Text style={styles.notFoundText}>暂无内容</Text>
    </View>
  )
}

export default NoData
