import React, { Component } from 'react';
import { Container, Toast, Content, Header, Form, Item, Input, Left, Right, Button, Icon, Body, Title, Thumbnail, StyleProvider, Label, StyleSheet } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { Platform, Text, View, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import { getAxiosInstance } from '../util/axios';

class RegisterCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'company',
      name: '',
      email: '',
      phone: '',
      nif: '',
      password: '',
      address: ''
    };
  }

  handleRegister = () => {
    console.log(this.state);
    /*// fazer as verificações de email valido e tamanho da password aqui
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
            } else if (error.code === 'address_invalid') {
              // mostrar erro 'morada inválida' (?)
            }
          });
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((error) => {
        console.log(error);
        // mostrar erro 'Ocorreu um problema. Tente novamente mais tarde'
      });*/
  }

  onAddressChange = (text) => {
    this.setState({
      ...this.state,
      address: text
    });
  }

  onNameChange = (text) => {
    this.setState({
      ...this.state,
      name: text
    });
  };

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
    this.setState({
      ...this.state,
      nif: text
    });
  }

  onPostalChange = (text) => {
    this.setState({
      ...this.state,
      postalCode: text
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
                <Input onTextChange={this.onNameChange} placeholder='Nome Empresa' />
              </Item>
              <Item rounded>
                <Input onTextChange={this.onAddressChange} placeholder='Morada' />
              </Item>
              <Item rounded>
                <Input onTextChange={this.onPostalChange} placeholder='Código Postal' />
              </Item>
              <Item rounded>
                <Input onTextChange={this.onEmailChange} placeholder='Email' />
              </Item>
              <Item rounded>
                <Input onTextChange={this.onPhoneChange} placeholder='Telemóvel' />
              </Item>
              <Item rounded>
                <Input onTextChange={this.onNIFChange} placeholder='NIF/VAT' />
              </Item>
              <Item rounded>
                <Input onTextChange={this.onPasswordChange} secureTextEntry={true} placeholder='Password' />
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
export default withNavigation(RegisterCompany);