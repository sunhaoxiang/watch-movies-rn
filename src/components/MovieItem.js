import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles/Main'

class MovieItem extends Component {
  static defaultProps = {
    itemData: {}
  }

  static propTypes = {
    itemData: PropTypes.object.isRequired
  }

  PressMovieItemHandler = () => {
    const {
      itemData: {
        title
      }
    } = this.props
    console.log(title)
  }

  render () {
    const {
      itemData: {
        images: { large },
        title,
        original_title,
        year,
        rating: { average }
      }
    } = this.props

    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={this.PressMovieItemHandler}
      >
        <View style={styles.item}>
          <Image
            source={{uri: large}}
            style={styles.itemImage}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{title}</Text>
            <Text style={styles.itemMeta}>
              {`${original_title} (${year})`}
            </Text>
            <Text style={styles.redText}>{average}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default MovieItem
