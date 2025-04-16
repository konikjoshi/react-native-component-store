import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Button.style';
import COLORS from '../../../utils/Colors';

export interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  style?: any;
  backgroundColor?: string;
  textStyle?: any;
  outlined?: boolean;
  outlinedColor?: string;
  textColor?: string;
  gradientColor?: string[];
  disabled?: boolean;
  activeOpacity?: number;
  rightIcon?: string;
  testID?: string;
}

const MCButton = ({
  title,
  onPress,
  style,
  backgroundColor,
  textStyle,
  outlined,
  outlinedColor,
  textColor,
  gradientColor,
  disabled,
  activeOpacity,
  // rightIcon,
  testID,
}: CustomButtonProps) => {
  // Determine the button's style based on whether it's outlined or not
  const buttonStyle = outlined ? styles.outlinedContainer : styles.container;
  const backgroundColorValue = outlined
    ? backgroundColor || COLORS.TRANSPARENT
    : backgroundColor || COLORS.GREEN;
  const textColorValue = outlined ? outlinedColor : textColor || COLORS.WHITE;

  // Ensure gradientColor is an array (if not, convert it to a default gradient)
  const gradientColors = Array.isArray(gradientColor)
    ? gradientColor
    : [backgroundColorValue, backgroundColorValue];

  return (
    <TouchableOpacity
      testID={testID}
      disabled={disabled}
      activeOpacity={activeOpacity || 0.5}
      onPress={onPress}
      style={[
        buttonStyle,
        style,
        { backgroundColor: backgroundColorValue, borderColor: textColorValue },
      ]}
    >
      {/* Apply gradient background if gradientColor is provided */}
      <LinearGradient style={styles.gradientStyle} colors={gradientColors}>
        <Text style={[styles.text, textStyle, { color: textColorValue }]}>
          {title}
        </Text>
        {/* {rightIcon ? (
          <MCIcon name={rightIcon} size={20} color={textColorValue} />
        ) : null} */}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MCButton;
