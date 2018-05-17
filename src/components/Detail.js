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
import isIphoneX from '../utils/isIphoneX'
import styles from '../styles/Main'
import iconNoData from '../assets/images/no-data.png'

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
        <View style={styles.notFoundTextWrapper}>
          <Image
            source={iconNoData}
            style={styles.notFoundImage}
          />
          <Text style={styles.notFoundText}>暂无内容</Text>
        </View>
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

    const directorsShow = directors.map(item => item.name).join(' / ')

    const castsShow = casts.map(item => item.name).join(' / ')

    const genresShow = genres.join(' / ')

    const splitSummary = summary.split(/\n/).map((item, index) => {
      return (
        <View key={index} style={styles.detailSummary}>
          <Text style={styles.itemText}>{`${item}`}</Text>
        </View>
      )
    })

    return (
      <ScrollView style={isIphoneX() ? styles.headerSpaceIphoneX : styles.headerSpace}>
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
          <Text style={styles.detailBlurMeta}>{`${countries[0]} · ${year} · ${durations[0]}`}</Text>
          <Text style={styles.detailBlurOriginalTitle}>{original_title}</Text>
          <View style={styles.detailBlurImageWrapper}>
            <Image
              style={styles.detailBlurImage}
              source={{uri: large}}
            />
          </View>
        </View>
        <View style={styles.detailInfoWrapper}>
          <View style={styles.detailInfo}>
            <Text style={styles.detailInfoTitle}>导演</Text>
            <Text style={styles.detailInfoContent}>{directorsShow}</Text>
          </View>
        </View>
        <View style={styles.detailInfoWrapper}>
          <View style={styles.detailInfo}>
            <Text style={styles.detailInfoTitle}>演员</Text>
            <Text style={styles.detailInfoContent}>{castsShow}</Text>
          </View>
        </View>
        <View style={styles.detailInfoWrapper}>
          <View style={styles.detailInfo}>
            <Text style={styles.detailInfoTitle}>评分</Text>
            <Rating
              average={average}
              stars={stars}
            />
          </View>
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
