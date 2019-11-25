import { DefaultTheme, Appbar } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  Appbar: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#C87C4B',
    secondary: '#414757',
    error: '#f13a59',
  },
};
