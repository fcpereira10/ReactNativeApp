import React, { memo } from 'react';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';
import BackgroundHome from '../components/BackgroundHome';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <BackgroundHome>
    <Logo />
    <Header>Menu Plate</Header>

    <Paragraph>
     Entra e descobre os melhores restaurantes!
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </BackgroundHome>
);

export default memo(HomeScreen);
