import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/Colors';
import { scale } from '../../../utils/Utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE6,
    borderRadius: 25,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  gradientStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  outlinedContainer: {
    borderColor: COLORS.GREEN,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: scale(14),
    fontWeight: '600',
  },
});

export default styles;
