import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackgroundRegister from '../components/BackgroundRegister';
import BackButton from '../components/BackButton';
import ScrollableTabBar from '../components/ScrollableTabBar';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../core/utils';
import { ScrollView } from 'react-native-gesture-handler';


type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {


  const _onSignUpPressed = () => {

    navigation.navigate('Dashboard');
  };

  return (
    
    <BackgroundRegister>
      
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />
     
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false} style={{width: "100%"}}>
        
        <View style={styles.row}>
        <ScrollableTabBar />
        </View>
      </ScrollView>
   
    </BackgroundRegister>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,

  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
