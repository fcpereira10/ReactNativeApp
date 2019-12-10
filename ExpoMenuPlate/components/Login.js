import React, { Component} from 'react';
import { Container,Content, Header, Form, Item, Input, Left, Right, Button, Icon, Body, Title, Thumbnail, StyleProvider, Label, StyleSheet} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { Platform, Text, View, TouchableOpacity } from "react-native";

export default class Login extends Component {
  
  render() {

    return (
      <StyleProvider style={getTheme(commonColor)}>   
      <Container>
      <Header transparent>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
          
          </Body>
          <Right>
          </Right>
        </Header>
        <Thumbnail large source={require('../assets/images/logo.png') }/>
        <Text style={{paddingTop: 20, fontSize: 25, color: 'black', alignSelf: 'center'}}>Bem-vindo de Volta!</Text>
      <Content scrollEnabled={false}>
        <Form>
        <Item rounded>
            <Input placeholder='Email'/>
          </Item>
          <Item rounded>
            <Input secureTextEntry={true} placeholder='Password'/>
          </Item>
          <Button rounded>
            <Text style={{fontSize: 17}}> Entrar </Text>
          </Button>
          <View style={{paddingTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',marginTop: 4}}>
            <Text style={{fontSize: 17}}>Ainda não tem uma Conta? </Text>
          <TouchableOpacity>
          <Text style={{fontSize: 17, color: '#FF8B2D'}}>Registar</Text>
        </TouchableOpacity>
      </View>
          
        </Form>
    </Content>
    </Container>
    </StyleProvider>
      );
    }
}
