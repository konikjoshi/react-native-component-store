import { View, type ViewStyle } from 'react-native';
import styles from './Divider.style';
import COLORS from '../../../utils/Colors';

export interface DividerProps {
  borderColor?: string;
  viewStyle?: ViewStyle;
}

const Divider = (props: DividerProps) => {
  const { borderColor, viewStyle } = props;
  return (
    <View
      style={[
        styles.divider,
        viewStyle,
        { borderColor: borderColor || COLORS.GRAY1E },
      ]}
    />
  );
};

export default Divider;
