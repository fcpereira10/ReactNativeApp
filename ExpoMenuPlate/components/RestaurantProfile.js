import React, { Component } from 'react';
import { List, ListItem, Container, Header, Thumbnail, Card, CardItem, H1, H3, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
import { withNavigation } from 'react-navigation';
import { Platform, View, TouchableOpacity } from "react-native";
import { isAuthenticated } from '../util/authentication';

class RestaurantProfile extends Component {

    static navigationOptions = {
        title: 'RestaurantProfile',
    };

    constructor(props) {
        super(props);

        this.state = {
            restaurant: this.props.navigation.getParam('restaurant', null)
        }
    }

    componentDidMount = () => {
        let totalRating = 0;

        this.state.restaurant.comments.forEach(comment => {
            if (comment.status == 1) {
                totalRating += comment.stars;
            }
        });

        this.setState({
            ...this.state,
            rating: this.state.restaurant.comments.length > 0 && totalRating / this.state.restaurant.comments.length != 0 ? (totalRating / this.state.restaurant.comments.length).toFixed(2) : "Unavaliable"
        });
    };

    newReservationClicked = async () => {
        if (await isAuthenticated()) {
            this.props.navigation.navigate('Reservation', { restaurant: this.state.restaurant });
        } else {
            this.props.navigation.navigate('Login');
        }
    }

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
                                <Text style={{ fontSize: 17, color: '#FF8B2D' }}>{this.state.restaurant.name}</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="navigate" style={{ color: "#555555" }} /><Text>{this.state.restaurant.address}</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="star" style={{ color: "#555555" }} /><Text>{this.state.rating}</Text>
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
                        <Card>
                            <CardItem Header bordered>
                                <Text style={{ fontSize: 17, color: '#FF8B2D' }}>Comentários</Text>
                            </CardItem>
                            <CardItem>
                                <List>
                                    {this.state.restaurant.comments.map(element => {
                                        if (element.status == 1) {
                                            return (
                                                <ListItem>
                                                    <Text>{element.username} ({element.stars}☆): {element.comment}</Text>
                                                </ListItem>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </List>
                            </CardItem>
                        </Card>
                        <Button primary onPress={() => this.newReservationClicked()}><Text>Reservar</Text></Button>
                    </Content>
                </Container>
            </StyleProvider >
        );
    }
}
export default withNavigation(RestaurantProfile);