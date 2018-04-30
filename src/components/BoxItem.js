import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles/Main'

class BoxItem extends Component {
  static defaultProps = {
    itemData: {},
    onItemPress: null
  }

  static propTypes = {
    itemData: PropTypes.object.isRequired,
    onItemPress: PropTypes.func.isRequired
  }

  render () {
    const {
      itemData: {
        box,
        subject,
        subject: {
          images: { large },
          title,
          original_title,
          year,
          rating: { average }
        }
      },
      onItemPress
    } = this.props

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
            <Text style={styles.itemMeta}>{`${original_title} (${year})`}</Text>
            <Text style={styles.yellowText}>{`${(box / 10000).toFixed(0)}万`}</Text>
            <Text style={styles.redText}>{average ? average.toFixed(1) : '暂无评分'}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default BoxItem
