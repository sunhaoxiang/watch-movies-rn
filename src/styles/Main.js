import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae7ff'
  },
  headerSpace: {
    marginTop: 60,
    marginBottom: 40
  },
  headerSpaceIphoneX: {
    marginTop: 82,
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
    borderColor: 'rgba(100, 53, 201, 0.1)',
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
    marginTop: 6
  },
  itemHeader: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 6
  },
  itemMeta: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 6
  },
  yellowText: {
    color: '#f5be0b',
    fontSize: 16,
    marginBottom: 6
  },
  redText: {
    color: '#db2828',
    fontSize: 15
  },
  title: {
    fontSize: 26,
    color: '#6435c9',
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 2,
    lineHeight: 33,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300'
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26,
  },
  detailImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 6
  },
  detailImage: {
    width: 120,
    height: 180,
    margin: 6
  },
  detailContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: 'rgba(0, 0, 0, 0.8)',
    marginBottom: 5
  },
  detailSummaryWrapper: {
    paddingTop: 20
  },
  detailSummary: {
    marginBottom: 15,
    paddingLeft: 6,
    paddingRight: 6
  },
  loadMoreWrapper: {
    marginVertical: 20,
    alignSelf: 'center'
  },
  loadMoreText: {
    color: 'rgba(0, 0, 0, 0.3)'
  },
  inputWrapper: {
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: "rgba(100, 53, 201, 0.1)",
    borderBottomWidth: 1
  },
  input: {
    height: 50
  },
  inputLoading: {
    position: 'absolute',
    top: 20,
    right: 10
  }
})
