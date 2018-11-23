import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerSpace: {
    marginTop: 60,
    marginBottom: 40
  },
  headerSpaceIPhoneX: {
    marginTop: 88,
    marginBottom: 82
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingTop: 6,
    paddingBottom: 6,
    flex: 1
  },
  itemImage: {
    width: 99,
    height: 138,
    margin: 6
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
    marginRight: 5
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    color: '#1c2438',
    marginBottom: 2
  },
  itemOriginalTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#80848f',
    marginBottom: 10
  },
  itemMeta: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: '#80848f',
    marginBottom: 10
  },
  averageWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingTextWrapper: {
    backgroundColor: '#FFCE00',
    borderColor: '#FFCE00',
    borderRadius: 3,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    marginRight: 10
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#1c2438',
    fontWeight: '500'
  },
  boxWrapper: {
    flexDirection: 'row',
    marginTop: 10
  },
  boxTextWrapper: {
    backgroundColor: '#e5120c',
    borderColor: '#e5120c',
    borderWidth: 1,
    borderRadius: 3,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5
  },
  boxText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700'
  },
  title: {
    fontSize: 26,
    color: '#e5120c',
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 2,
    lineHeight: 33,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300'
  },
  itemText: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#495060',
    lineHeight: 26
  },
  detailHeader: {
    flex: 1,
    height: 250,
    marginBottom: 30
  },
  detailBlurContainer: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailBlurAbsolute: {
    position: "absolute",
    height: 200,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  detailBlurTitle: {
    position: "absolute",
    top: 30,
    left: 10,
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Helvetica Neue',
    color: '#fff'
  },
  detailBlurGenres: {
    position: "absolute",
    top: 100,
    left: 10,
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#fff'
  },
  detailBlurMeta: {
    position: "absolute",
    top: 130,
    left: 10,
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#fff'
  },
  detailBlurOriginalTitle: {
    position: "absolute",
    bottom: 0,
    left: 10,
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    color: '#495060',
    marginRight: 150
  },
  detailBlurImageWrapper: {
    position: "absolute",
    bottom: 0,
    right: 20,
    shadowColor: '#1c2438',
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  detailBlurImage: {
    width: 110,
    height: 165
  },
  detailInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  detailInfoTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    lineHeight: 18,
    color: '#bbbec4',
    paddingRight: 20
  },
  detailInfoContent: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    lineHeight: 18,
    color: '#495060',
    paddingRight: 45
  },
  detailTitleWrapper: {
    marginTop: 20,
    marginLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#e5120c'
  },
  detailTitleText: {
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '900'
  },
  detailSummaryWrapper: {
    paddingTop: 10
  },
  detailSummary: {
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  loadMoreWrapper: {
    marginVertical: 20,
    alignSelf: 'center'
  },
  loadMoreText: {
    color: '#80848f'
  },
  inputWrapper: {
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1
  },
  input: {
    height: 50
  },
  inputLoading: {
    position: 'absolute',
    top: 20,
    right: 10
  },
  searchHeader: {
    color: '#495060',
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    marginTop: 30,
    marginLeft: 10
  },
  searchText: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#bbbec4',
    marginBottom: 6
  },
  deleteIcon: {
    width: 24,
    height: 24,
    margin: 8
  },
  notFoundTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notFoundImage: {
    width: 100,
    height: 100
  },
  notFoundText: {
    color: '#bfbfbf',
    fontWeight: '600'
  }
})
