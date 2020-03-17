import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { SF_LIGHT, SF_BOLD } from '../../../../../constants/fonts';

const LARGE_MARGIN = 30;
const MEDIUM_MARGIN = 20;
const STANDARD_MARGIN = 15;

export default StyleSheet.create({
  author: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: SF_BOLD,
    fontWeight: '300',
    letterSpacing: -0.24,
    marginRight: 25,
    textAlign: 'left'
  },
  bookContainer: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20
  },
  bookImage: {
    height: 60,
    marginLeft: LARGE_MARGIN,
    marginRight: MEDIUM_MARGIN,
    marginVertical: STANDARD_MARGIN,
    width: 40
  },
  bookInfoContainer: {
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'row',
    height: 90
  },
  descriptionContainer: {
    flexDirection: 'column',
    marginTop: STANDARD_MARGIN
  },
  title: {
    color: Colors.black,
    fontSize: 17,
    fontFamily: SF_LIGHT,
    fontWeight: 'bold',
    letterSpacing: -0.41,
    lineHeight: 20,
    marginRight: MEDIUM_MARGIN,
    marginBottom: 3,
    textAlign: 'left'
  }
});
