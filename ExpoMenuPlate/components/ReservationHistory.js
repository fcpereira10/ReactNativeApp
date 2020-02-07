import React, { Component } from 'react';
import { Container, Header, Thumbnail, Card, CardItem, H1, H3, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
import { withNavigation } from 'react-navigation';
import { Platform, View, TouchableOpacity } from "react-native";

class ReservationHistory extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
    };

    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Content padder>
                        <Card transparent>
                            <CardItem>
                                <Body>
                                    <Thumbnail source={require('../assets/images/person-icon.png')} style={{ width: 80, height: 80, borderRadius: 80 / 2 }} />
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem Header bordered>
                            <Text style={{ fontSize: 17, color: '#FF8B2D' }}>Nome do Restaurante</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="calendar" style={{ color: "#555555" }} /><Text>07/02/2020</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="time" style={{ color: "#555555" }} /><Text>13h00</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="people" style={{ color: "#555555" }} /><Text>3 Pessoas</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem Header bordered>
                            <Text style={{ fontSize: 17, color: '#FF8B2D' }}>Bar do ISP</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="calendar" style={{ color: "#555555" }} /><Text>11/02/2020</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="time" style={{ color: "#555555" }} /><Text>19h00</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="people" style={{ color: "#555555" }} /><Text>2 Pessoas</Text>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider >
        );

    }
}
export default withNavigation(ReservationHistory);