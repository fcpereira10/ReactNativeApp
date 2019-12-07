import React, { Component } from 'react';
import { Container,Content, Header, Form, Item, Input, Label, Left, Right, Button, Icon, Body, Title} from 'native-base';

export default class Login extends Component {
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Entrar</Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <Form>
            <Item floatingLabel id>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
  
}