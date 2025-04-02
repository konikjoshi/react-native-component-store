import { Dimensions, PixelRatio, Platform } from 'react-native';

// Screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base scale design
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scale based on screen size
const scale = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size;
const verticalScale = (size: number) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Dynamic Width and Height
const DW = (percent: number) =>
  PixelRatio.roundToNearestPixel((SCREEN_WIDTH * percent) / 100);
const DH = (percent: number) =>
  PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * percent) / 100);

// Platform checks
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

// Font size scaling from 10 to 35
const FONT_SIZES = {
  size10: scale(10),
  size11: scale(11),
  size12: scale(12),
  size13: scale(13),
  size14: scale(14),
  size15: scale(15),
  size16: scale(16),
  size17: scale(17),
  size18: scale(18),
  size19: scale(19),
  size20: scale(20),
  size21: scale(21),
  size22: scale(22),
  size23: scale(23),
  size24: scale(24),
  size25: scale(25),
  size26: scale(26),
  size27: scale(27),
  size28: scale(28),
  size29: scale(29),
  size30: scale(30),
  size31: scale(31),
  size32: scale(32),
  size33: scale(33),
  size34: scale(34),
  size35: scale(35),
};

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  scale,
  verticalScale,
  moderateScale,
  DW,
  DH,
  FONT_SIZES,
  isIOS,
  isAndroid,
};
