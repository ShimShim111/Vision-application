declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      fillSecondary?: string;
    }
  >;
  export default content;
}
declare module 'reactotron-redux';
declare module 'reactotron-react-native';
declare module '@react-native-community/netinfo';
declare module 'react-native-date-picker';
declare module 'react-native-version-check';
declare module 'react-native-star-view';
declare module 'rn-range-slider';
declare module 'react-native-video-player';
declare module 'react-native-animatable-unmountable';
