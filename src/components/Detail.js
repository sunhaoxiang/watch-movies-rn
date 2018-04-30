import React from 'react'
import {
  View,
  ScrollView,
  Text,
  Image
} from 'react-native'
import styles from '../styles/Main'

const Detail = (props) => {
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

  const directorsNames = directors.map(item => item.name).join('/')

  const castsNames = casts.map(item => item.name).join('/')

  const genresText = genres.join('/')

  const countriesText = countries.join('/')

  const splitSummary = summary.split(/\n/).map((item, index) => {
    return (
      <View key={index} style={styles.detailSummary}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    )
  })

  return (
    <ScrollView style={styles.headerSpace}>
      <View style={styles.detailImageWrapper}>
        <Image
          source={{uri: large}}
          style={styles.detailImage}
        />
        <View style={styles.detailContent}>
          <Text style={styles.detailText}>{`导演：${directorsNames}`}</Text>
          <Text style={styles.detailText}>{`主演：${castsNames}`}</Text>
          <Text style={styles.detailText}>{`类型：${genresText}`}</Text>
          <Text style={styles.detailText}>{`国家：${countriesText}`}</Text>
          <Text style={styles.detailText}>{`上映年份：${year}`}</Text>
          <Text style={styles.detailText}>{`评分：${average}`}</Text>
        </View>
      </View>
      <View style={styles.detailSummaryWrapper}>
        {splitSummary}
      </View>
    </ScrollView>
  )
}

export default Detail
