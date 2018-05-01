import {
  Platform,
  Dimensions
} from 'react-native'

const isIphoneX = () => {
  // iPhoneX的宽和高
  const xWidth = 375
  const xHeight = 812

  // 设备的宽和高
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  // 通过设备宽高与iPhoneX宽高是否相同来判断（需考虑横屏）
  return (
    Platform.OS === 'ios' &&
    ((screenWidth === xWidth && screenHeight === xHeight) || (screenWidth === xHeight && screenHeight === xWidth))
  )
}

export default isIphoneX
