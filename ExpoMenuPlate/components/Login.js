import React, { Component } from 'react';
import { Container, Content, Header, Form, Item, Input, Left, Right, Button, Icon, Body, Title, Thumbnail, StyleProvider, Label, StyleSheet } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { Platform, Text, View, TouchableOpacity } from "react-native";
import { getAxiosInstance } from '../util/axios';
import { setAccessToken } from '../util/authentication';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailTextChange = (text) => {
    this.setState({
      ...this.state,
      email: text
    });

    console.log(this.state);
  };

  handlePasswordTextChange = (text) => {
    this.setState({
      ...this.state,
      password: text
    });
  };

  handleLogin = () => {
    // fazer as verificações de email valido e tamanho da password aqui 192.168.6.180

    getAxiosInstance().post('/user/login', this.state) // alterar aqui se o state for alterado
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
          setAccessToken(response.data.token);
          // mostrar mensagem a dizer que logou com sucesso e ir para home
        }
      })
      .catch((error) => {
        console.log(error);
        // mostrar erro 'Ocorreu um problema. Tente novamente mais tarde'
      });
  };

  render() {

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header transparent style={{ height: 60, paddingTop: 15 }}>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
            </Body>
            <Right>
            </Right>
          </Header>
          <Thumbnail large source={require('../assets/images/logo.png')} />
          <Text style={{ paddingTop: 20, fontSize: 25, alignSelf: 'center' }}>Bem-vindo de Volta!</Text>
          <Content scrollEnabled={false}>
            <Form>
              <Item rounded>
                <Input placeholder='Email' onChangeText={this.handleEmailTextChange} />
              </Item>
              <Item rounded>
                <Input secureTextEntry={true} placeholder='Password' onChangeText={this.handlePasswordTextChange} />
              </Item>
              <Button rounded onPress={this.handleLogin}>
                <Text style={{ fontSize: 17 }}>Entrar</Text>
              </Button>
              <View style={{ paddingTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 4 }}>
                <Text style={{ fontSize: 17 }}>Ainda não tem uma Conta? </Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 17, color: '#FF8B2D' }}>Registar</Text>
                </TouchableOpacity>
              </View>
            </Form>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
