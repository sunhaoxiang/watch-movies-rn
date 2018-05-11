import React from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'
import styles from "../styles/Main"

const LoadingSpin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
        />
      </View>
    </View>
  )
}

export default LoadingSpin
