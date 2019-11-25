import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import { StatusBar } from 'react-native'

const Main = () => (
  <Provider theme={theme}>
    <App />
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
  </Provider>
);

export default Main;
