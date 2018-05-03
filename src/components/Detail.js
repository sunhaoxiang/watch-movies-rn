import React from 'react'
import {
  View,
  ScrollView,
  Text,
  Image
} from 'react-native'
import isIphoneX from '../utils/isIphoneX'
import styles from '../styles/Main'

const Detail = props => {
  const {
    images: {
      large
    },
    directors,
    casts,
    genres,
    year,
    countries,
    rating: {
      average
    },
    summary
  } = props.detail

  const directorsShow = directors.map(item => item.name).join(' / ')

  const castsShow = casts.map(item => item.name).join(' / ')

  const genresShow = genres.join(' / ')

  const countriesShow = countries.join(' / ')

  const splitSummary = summary.split(/\n/).map((item, index) => {
    return (
      <View key={index} style={styles.detailSummary}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    )
  })

  return (
    <ScrollView style={isIphoneX() ? styles.headerSpaceIphoneX : styles.headerSpace}>
      <View style={styles.detailImageWrapper}>
        <Image
          source={{uri: large}}
          style={styles.detailImage}
        />
        <View style={styles.detailContent}>
          <Text style={styles.detailText}>{`导演：${directorsShow}`}</Text>
          <Text style={styles.detailText}>{`主演：${castsShow}`}</Text>
          <Text style={styles.detailText}>{`类型：${genresShow}`}</Text>
          <Text style={styles.detailText}>{`国家：${countriesShow}`}</Text>
          <Text style={styles.detailText}>{`上映年份：${year}`}</Text>
          <Text style={styles.detailText}>{`评分：${average ? average.toFixed(1) : '暂无评分'}`}</Text>
        </View>
      </View>
      <View style={styles.detailSummaryWrapper}>
        {splitSummary}
      </View>
    </ScrollView>
  )
}

export default Detail
