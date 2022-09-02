import { Platform, StyleSheet } from "react-native";
import { createTheme } from '@shopify/restyle';
import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

const palette = {
   black :'#000000',
   green:'#30C68C',
   gray:'#313131',
   white:'#ffffff',
   
   gradient1:'#28DF99',
   gradient2:'#46846C',

   transparent:'transparent',

   iconInActive:'#707070',
   iconActive:'white',
  };

  const theme = createTheme({
    colors: {
      Background: palette.black,
      cardGradient1:palette.gradient1, 
      cardGradient2:palette.gradient2, 
      header:palette.green,
      textinput:palette.green,
      sortBackground:palette.gray,
      sortActive:palette.green,
      sortInActive:palette.transparent,
      sortActiveText:palette.black,
      sortInActiveText:palette.white,

      iconInActive:palette.iconInActive,
      iconActive:palette.iconActive,

    },
    spacing: {
      xs: 2,
      s: 8,
      ms:10,
      ms2:12,
      m: 16,
      l: 24,
      xl: 40,
    },
    breakpoints: {
      phone: 0,
      longPhone: {
        width: 0,
        height: 812,
      },
      tablet: 768,
      largeTablet: 1024,
    },
   
  });

export default theme