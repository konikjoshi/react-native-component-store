import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';
import { scale } from '../../utils/Utils';

const styles = StyleSheet.create({
  text: {
    fontSize: scale(14),
    color: COLORS.BLACK,
  },
});

export default styles;
