import gotvButton, {
  type CustomButtonProps as GOtvButtonProps,
} from './gotv/Button/Button';
import gotvText, {
  type TextComponentProps as GOtvTextProps,
} from './gotv/Text/Text';
import gotvDivider, {
  type DividerProps as GOtvDividerProps,
} from './gotv/Divider/Divider';
import gotvImage, {
  type CustomFastImageProps as GOtvImageProps,
} from './gotv/Image/Image';

import mydstvButton, {
  type CustomButtonProps as MyDstvButtonProps,
} from './mydstv/Button/Button';
import mydstvText, {
  type TextComponentProps as MyDstvTextProps,
} from './mydstv/Text/Text';
import mydstvDivider, {
  type DividerProps as MyDstvDividerProps,
} from './mydstv/Divider/Divider';
import mydstvImage, {
  type CustomFastImageProps as MyDstvImageProps,
} from './mydstv/Image/Image';

import { getLibraryConfig } from '../config';

export const Button: React.FC<GOtvButtonProps | MyDstvButtonProps> = (
  props
) => {
  const config = getLibraryConfig();
  const Component = config.app === 'gotv' ? gotvButton : mydstvButton;
  return <Component {...props} />;
};

export const Text: React.FC<GOtvTextProps | MyDstvTextProps> = (props) => {
  const config = getLibraryConfig();
  const Component = config.app === 'gotv' ? gotvText : mydstvText;
  return <Component {...props} />;
};

export const Divider: React.FC<GOtvDividerProps | MyDstvDividerProps> = (
  props
) => {
  const config = getLibraryConfig();
  const Component = config.app === 'gotv' ? gotvDivider : mydstvDivider;
  return <Component {...props} />;
};

export const Image: React.FC<GOtvImageProps | MyDstvImageProps> = (props) => {
  const config = getLibraryConfig();
  const Component = config.app === 'gotv' ? gotvImage : mydstvImage;
  return <Component {...props} />;
};
