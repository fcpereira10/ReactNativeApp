import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { withNavigation } from 'react-navigation';

class RestaurantCard extends Component {

  constructor(props) {
    super(props);
  }

  handleRestaurantClick = () => {
    this.props.navigation.navigate('RestaurantProfile', { restaurant: this.props.restaurant });
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Content style={{ height: '100%' }} scrollEnabled={false}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assets/images/logo.png')} />
                  <Body>
                    <Text onPress={this.handleRestaurantClick}>{this.props.restaurant.name}</Text>
                    <Text note>{this.props.restaurant.address}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../assets/images/restaurante.jpg')} style={{ height: 200, flex: 1 }} />
              </CardItem>
              <CardItem footer style={{ height: 50 }}>
                <Left>
                  <Button transparent >
                    <Icon name="star" style={{ color: '#FF7A00' }} />
                    <Text style={{ color: '#FF7A00' }}>5 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </StyleProvider >
    );
  }
}
export default withNavigation(RestaurantCard);