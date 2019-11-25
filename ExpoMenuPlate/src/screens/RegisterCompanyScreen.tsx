import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import Constants from 'expo-constants';
import BackgroundRegister from '../components/BackgroundRegister';


type Props = {
  navigation: Navigation;
};

const RegisterCompanyScreen = ({ navigation }: Props) => {


    const state = {
        username: '', password: '', email: '', phone_number: ''
      }
     const _onChangeText = (key, val) => {
        this.setState({ [key]: val })
      }
     const _signUp = async () => {
        const { username, password, email, phone_number } = this.state
        try {
          // here place your signup logic
         // console.log('user successfully signed up!: ', success)
        } catch (err) {
          console.log('error signing up: ', err)
        }
      }
    

  return (
    <BackgroundRegister>
      
    <BackButton goBack={() => navigation.navigate('HomeScreen')} />
    
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>

     <Logo />
    <Header>Registar Empresa</Header>
     
    <TextInput
      placeholder='Nome Empresa'
      onChangeText={val => this.onChangeText('name', val)}
    />
    <TextInput
      placeholder='Morada'
      onChangeText={val => this.onChangeText('address', val)}
    />
    <TextInput
      placeholder='Código Postal'
      onChangeText={val => this.onChangeText('postal_code', val)}
    />
    <TextInput
      placeholder='NIF/VAT'
      onChangeText={val => this.onChangeText('nif', val)}
    />
    <TextInput

      placeholder='Email'
      onChangeText={val => this.onChangeText('email', val)}
    />
    <TextInput

      placeholder='Telemóvel'
      onChangeText={val => this.onChangeText('phone', val)}
    />
    <TextInput
      placeholder='Password'
      secureTextEntry={true}
      onChangeText={val => this.onChangeText('password', val)}
    />
    <Button mode="contained" onPress={this.signUp} style={styles.button}>
    Registar
  </Button>

  <View style={styles.row}>
        <Text style={styles.label}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Entrar</Text>
        </TouchableOpacity>
      </View>
  </ScrollView>
  </View>
  </BackgroundRegister>
  
  )};
const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: Constants.statusBarHeight,  
  width: '100%',
  maxWidth: 340,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,

},
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
scrollview: {
  width: '100%',
  flex: 1,
},
})

export default memo(RegisterCompanyScreen);