import React, { Component} from 'react';
import { Container,Content, Header, Form, Item, Input, Left, Right, Button, Icon, Body, Title, Thumbnail, StyleProvider, Label, StyleSheet} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { Platform, Text, View } from "react-native";

export default class Login extends Component {
  
  render() {

    return (
      <StyleProvider style={getTheme(commonColor)}>   
      <Container>
      <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Thumbnail large source={require('../assets/images/logo.png') } />
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input/>
          </Item>
          <Item stackedLabel>
            <Label>Password</Label>
            <Input/>
          </Item>
          <Button>
            <Text> Entrar </Text>
          </Button>
        </Form>
    </Content>
    </Container>
    </StyleProvider>
      );
    }
}
