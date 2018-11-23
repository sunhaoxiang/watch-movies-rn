import React, { PureComponent } from 'react'
import {
  View,
  ScrollView,
  Text,
  Image,
  findNodeHandle
} from 'react-native'
import { BlurView } from 'react-native-blur'
import Rating from './Rating'
import NoData from './NoData'
import isIPhoneX from '../utils/isIPhoneX'
import styles from '../styles/Main'

class Detail extends PureComponent {
  state = {
    viewRef: null
  }

  imageLoaded = () => {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) })
  }

  render () {
    const { code } = this.props.detail

    if (code) {
      return (
        <NoData />
      )
    }

    const {
      title,
      countries,
      durations,
      year,
      original_title,
      images: {
        large
      },
      directors,
      casts,
      genres,
      rating: {
        average,
        stars
      },
      summary
    } = this.props.detail

    const countryShow = countries.length > 0 ? countries[0] : '未知国家'

    const durationShow = durations.length > 0 ? durations[0] : '未知时长'

    const directorsShow = directors.length > 0 ? directors.map(item => item.name).join(' / ') : '暂无'

    const castsShow = casts.length > 0 ? casts.map(item => item.name).join(' / ') : '暂无'

    const genresShow = genres.join(' / ')

    const splitSummary = summary.split(/\n/).map((item, index) => {
      return (
        <View key={index} style={styles.detailSummary}>
          <Text style={styles.itemText}>{`${item}`}</Text>
        </View>
      )
    })

    return (
      <ScrollView style={isIPhoneX() ? styles.headerSpaceIPhoneX : styles.headerSpace}>
        <View style={styles.detailHeader}>
          <View style={styles.detailBlurContainer}>
            <Image
              style={styles.detailBlurAbsolute}
              ref={(img) => { this.backgroundImage = img }}
              source={{uri: large}}
              onLoadEnd={this.imageLoaded}
            />
            <BlurView
              style={styles.detailBlurAbsolute}
              viewRef={this.state.viewRef}
              blurType="dark"
              blurAmount={10}
            />
          </View>
          <Text style={styles.detailBlurTitle}>{title}</Text>
          <Text style={styles.detailBlurGenres}>{genresShow}</Text>
          <Text style={styles.detailBlurMeta}>{`${countryShow} · ${year} · ${durationShow}`}</Text>
          <Text style={styles.detailBlurOriginalTitle}>{original_title}</Text>
          <View style={styles.detailBlurImageWrapper}>
            <Image
              style={styles.detailBlurImage}
              source={{uri: large}}
            />
          </View>
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.detailInfoTitle}>导演</Text>
          <Text style={styles.detailInfoContent}>{directorsShow}</Text>
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.detailInfoTitle}>演员</Text>
          <Text style={styles.detailInfoContent}>{castsShow}</Text>
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.detailInfoTitle}>评分</Text>
          <Rating
            average={average}
            stars={stars}
          />
        </View>
        <View style={styles.detailTitleWrapper}>
          <Text style={styles.detailTitleText}>剧情简介</Text>
        </View>
        <View style={styles.detailSummaryWrapper}>
          {splitSummary}
        </View>
      </ScrollView>
    )
  }
}

export default Detail
