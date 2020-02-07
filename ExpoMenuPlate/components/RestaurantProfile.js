import React, { Component } from 'react';
import { Container, Header, Thumbnail, Card, CardItem, H1, H3, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
import { withNavigation } from 'react-navigation';
import { Platform, View, TouchableOpacity } from "react-native";

class RestaurantProfile extends Component {

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
                                    <Thumbnail source={require('../assets/images/restaurante.jpg')} style={{ width: 330, height: 200 }} />
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem Header bordered>
                                <Text style={{ fontSize: 17, color: '#FF8B2D' }}>Esquina do Avesso</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="navigate" style={{ color: "#555555" }} /><Text>Rua Santa Catarina, 102, Leça da Palmeira 4450, Portugal</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="star" style={{ color: "#555555" }} /><Text>4 estrelas</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem Header bordered>
                                <Text style={{ fontSize: 17, color: '#FF8B2D' }}>Detalhes</Text>
                            </CardItem>
                            <CardItem>
                            <Text style={{ fontSize: 17, color: '#555555' }}>Opções sem glúten
                            {"\n"}
                            {"\n"}
                            Mediterrâneo, Europeia, Portuguesa
                            {"\n"}
                            {"\n"}
                            Almoço, Jantar
                            </Text>
                            </CardItem>
                        </Card>
                        <Button primary><Text> Reservar </Text></Button>
                    </Content>
                </Container>
            </StyleProvider >
        );

    }
}
export default withNavigation(RestaurantProfile);