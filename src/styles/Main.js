import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#eae7ff',
    paddingTop: 20
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
    color: '#6435c9'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
