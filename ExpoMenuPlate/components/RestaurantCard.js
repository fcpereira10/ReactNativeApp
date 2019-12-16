import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
export default class RestaurantCard extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(commonColor)}>
      <Container>
      <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/logo.png')} />
                <Body>
                  <Text>Bar do ISPGAYA</Text>
                  <Text note>Av. dos Descobrimentos 333, Vila Nova de Gaia</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../assets/images/restaurante.jpg')} style={{height: 200, width: 300, flex: 1}}/>
                <Text>
                  /////////Descrição do Restaurante///////
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{height: 50}}>
              <Left>
                <Button transparent >
                  <Icon name="star" style={{color: '#FF7A00'}} />
                  <Text style={{color: '#FF7A00'}}>2,9 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}