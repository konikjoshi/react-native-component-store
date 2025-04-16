import React from 'react';
import FastImage from 'react-native-fast-image';
import { type ImageStyle } from 'react-native';
import styles from './Image.style';

export interface CustomFastImageProps {
  source: string; // Network URL or local image reference
  style?: ImageStyle | any; // Optional custom styles
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center'; // Resize mode for the image
  fallbackSource?: string; // Optionally provide a fallback image for broken network images
  testID?: string;
}

const MCImage: React.FC<CustomFastImageProps> = ({
  source,
  style,
  resizeMode = 'contain', // Default to 'contain' if not provided
  fallbackSource = '', // Default to empty string for no fallback
  testID,
}) => {
  const renderImageSource =
    typeof source === 'string' ? { uri: source } : source;
  return (
    <FastImage
      testID={testID}
      source={renderImageSource}
      style={[styles.image, style]}
      resizeMode={resizeMode}
      onError={() => {
        if (fallbackSource) {
          // Update the source to fallbackSource when an error occurs
          renderImageSource.uri = fallbackSource;
        }
      }}
    />
  );
};
export default MCImage;
