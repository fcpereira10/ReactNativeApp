import React, { Component } from 'react';
import { Container, Content, Toast, Header, Form, Item, Input, Left, Right, Button, Icon, Body, Title, Thumbnail, StyleProvider, Label, StyleSheet } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { Platform, Text, View, TouchableOpacity } from "react-native";
import { getAxiosInstance } from '../util/axios';
import { withNavigation } from 'react-navigation';

class RegisterCostumer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'customer',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nif: '',
      password: ''
    };
  }

  handleRegister = () => {
    // fazer as verificações de email valido e tamanho da password aqui
    getAxiosInstance().post('/user/create', this.state) // alterar aqui se o state for alterado
      .then((response) => {
        console.log(response.data);
        if (response.data.errors.length !== 0) {
          response.data.errors.forEach(error => {
            if (error.code === 'no_user') {
              // mostrar erro 'Utilizador não existe'
            } else if (error.code === 'wrong_password') {
              // mostrar erro 'Password errada'
            } else if (error.code === 'db_error') {
              // mostrar erro 'Ocorreu um problema. Tente novamente mais tarde'
            }
          });
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((error) => {
        console.log(error);
        // mostrar erro 'Ocorreu um problema. Tente novamente mais tarde'
      });
  }

  onFirstNameChange = (text) => {
    this.setState({
      ...this.state,
      firstName: text
    });
  };

  onLastNameChange = (text) => {
    this.setState({
      ...this.state,
      lastName: text
    });
  }

  onEmailChange = (text) => {
    this.setState({
      ...this.state,
      email: text
    });
  }

  onPhoneChange = (text) => {
    this.setState({
      ...this.state,
      phone: text
    });
  }

  onNIFChange = (text) => {
    console.log(text);
    this.setState({
      ...this.state,
      nif: text
    });
  }

  onPasswordChange = (text) => {
    this.setState({
      ...this.state,
      password: text
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Content>
          <Thumbnail large source={require('../assets/images/logo.png')} />
            <Form>
              <Item rounded>
                <Input onChangeText={this.onFirstNameChange} placeholder='Primeiro Nome' />
              </Item>
              <Item rounded>
                <Input onChangeText={this.onLastNameChange} placeholder='Apelido' />
              </Item>
              <Item rounded>
                <Input onChangeText={this.onEmailChange} placeholder='Email' />
              </Item>
              <Item rounded>
                <Input onChangeText={this.onPhoneChange} placeholder='Telemóvel' />
              </Item>
              <Item rounded>
                <Input onChangeText={this.onNIFChange} placeholder='NIF/VAT' />
              </Item>
              <Item rounded>
                <Input onChangeText={this.onPasswordChange} secureTextEntry={true} placeholder='Password' />
              </Item>
              <Button onPress={this.handleRegister} rounded>
                <Text style={{ fontSize: 17 }}> Registar </Text>
              </Button>
              <View style={{ paddingTop: 20, paddingBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 4 }}>
                <Text style={{ fontSize: 17 }}>Já tem uma conta? </Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 17, color: '#FF8B2D' }} onPress={() => this.props.navigation.navigate('Login')}>Entrar</Text>
                </TouchableOpacity>
              </View>

            </Form>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
export default withNavigation(RegisterCostumer);