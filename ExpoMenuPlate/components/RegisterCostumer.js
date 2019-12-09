import React, { Component} from 'react';
import { Container,Content, Header, Form, Item, Input, Left, Right, Button, Icon, Body, Title, Thumbnail, StyleProvider, Label, StyleSheet} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { Platform, Text, View, TouchableOpacity } from "react-native";

export default class RegisterCostumer extends Component {
  
  render() {

    return (
      <StyleProvider style={getTheme(commonColor)}>   
      <Container>
      <Content>    
        <Thumbnail large source={require('../assets/images/logo.png') } />

        <Form>
        <Item rounded>
            <Input placeholder='Primeiro Nome'/>
          </Item>
          <Item rounded>
            <Input placeholder='Apelido'/>
          </Item>
          <Item rounded>
            <Input placeholder='Email'/>
          </Item>
          <Item rounded>
            <Input placeholder='Telemóvel'/>
          </Item>
          <Item rounded>
            <Input placeholder='NIF/VAT'/>
          </Item>
          <Item rounded>
            <Input secureTextEntry={true} placeholder='Password'/>
          </Item>
          <Button rounded>
            <Text style={{fontSize: 17}}> Entrar </Text>
          </Button>
          <View style={{paddingTop: 20, paddingBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',marginTop: 4}}>
            <Text style={{fontSize: 17}}>Já tem uma conta? </Text>
          <TouchableOpacity>
          <Text style={{fontSize: 17, color: '#FF8B2D'}}>Entrar</Text>
        </TouchableOpacity>
      </View>
          
        </Form>
    </Content>
    </Container>
    </StyleProvider>
      );
    }
}