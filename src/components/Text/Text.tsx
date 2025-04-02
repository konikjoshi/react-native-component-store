import React from 'react';
import styles from './Text.style';
import { Text, type TextProps } from 'react-native';

// Define a reusable Text component that accepts all the props from the default Text component
interface TextComponentProps extends TextProps {
  customStyle?: object; // Allow for custom styles to be passed
  children: React.ReactNode; // Text content to be displayed
  testID?: string;
}

const MCText: React.FC<TextComponentProps> = ({
  children,
  customStyle,
  style,
  testID,
  ...rest
}) => {
  // Combine customStyle with any other styles passed through the `style` prop
  const combinedStyles = [styles.text, customStyle, style];

  return (
    <Text testID={testID} style={combinedStyles} {...rest}>
      {children}
    </Text>
  );
};
export default MCText;
