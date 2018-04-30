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
          color="#6435c9"
        />
      </View>
    </View>
  )
}

export default LoadingSpin
