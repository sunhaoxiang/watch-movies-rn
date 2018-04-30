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
    itemData: {}
  }

  static propTypes = {
    itemData: PropTypes.object.isRequired
  }

  PressBoxItemHandler = () => {
    const {
      itemData: {
        subject: {
          title
        }
      }
    } = this.props
    console.log(title)
  }

  render () {
    const {
      itemData: {
        box,
        subject: {
          images: { large },
          title,
          original_title,
          rating: { average }
        }
      }
    } = this.props

    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={this.PressBoxItemHandler}
      >
        <View style={styles.item}>
          <Image
            source={{uri: large}}
            style={styles.itemImage}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{title}</Text>
            <Text style={styles.itemMeta}>{original_title}</Text>
            <Text style={styles.yellowText}>{`${(box / 10000).toFixed(0)}万`}</Text>
            <Text style={styles.redText}>{average ? average : '暂无评分'}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default BoxItem
