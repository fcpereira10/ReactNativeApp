import React, { Component } from 'react';
import { Container,Content, Header, Form, Item, Input, Label, Left, Right, Button, Icon, Body, Title} from 'native-base';

export default class Login extends Component {
  
  render() {
    return (
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
              <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
              <Input />
              </Item>
            </Form>
          </Content>
      );
    }
    
  
}