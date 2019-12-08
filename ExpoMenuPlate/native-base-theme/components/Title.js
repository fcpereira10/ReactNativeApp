// @flow

import { Platform } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: "#000000",
    fontWeight: Platform.OS === PLATFORM.IOS ? '700' : '700',
    textAlign: 'center',
    paddingTop: 1
  };

  return titleTheme;
};
