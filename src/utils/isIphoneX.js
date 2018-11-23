import {
  Platform,
  Dimensions
} from 'react-native'

const isIPhoneX = () => {
  if (Platform.OS !== 'ios') {
    return false
  }
  // IPhoneX / IPhoneXs Max 的宽和高
  const xWidth = 375
  const xHeight = 812
  const xsMaxWidth = 414
  const xsMaxHeight = 896

  // 设备的宽和高
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const isIPhoneX = ((screenWidth === xWidth && screenHeight === xHeight) || (screenWidth === xHeight && screenHeight === xWidth))
  const isIPhoneXsMax = ((screenWidth === xsMaxWidth && screenHeight === xsMaxHeight) || (screenWidth === xsMaxHeight && screenHeight === xsMaxWidth))

  // 通过设备宽高与IPhoneX宽高是否相同来判断（需考虑横屏）
  return (isIPhoneX || isIPhoneXsMax)
}

export default isIPhoneX
