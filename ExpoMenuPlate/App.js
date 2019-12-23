import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Profile from './screens/ProfileScreen';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleProvider, Container, Root } from 'native-base';


const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Profile: {screen: Profile},
},
{
  initialRouteName: "Home"
},
{
  defaultNavigationOptions: {
    header: null
  }
}
);


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    console.log(this.props);
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
          <AppContainer />
      </StyleProvider>
    );
  }
}

