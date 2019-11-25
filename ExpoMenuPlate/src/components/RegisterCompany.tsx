import React from 'react'
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
export default class RegisterCompany extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
     // console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
  

    return (
      
      <View style={{padding: 10, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>

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
        <Text style={styles.label}>Already have an account? </Text>
{/*         <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}> */}
          <Text style={styles.link}>Login</Text>
{/*         </TouchableOpacity> */}
      </View>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,  
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  
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
    },
})