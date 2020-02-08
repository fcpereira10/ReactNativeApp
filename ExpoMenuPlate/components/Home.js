import React, { Component } from 'react';
import { Container, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider, TouchableOpacity } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
import { withNavigation } from 'react-navigation';
import { getAxiosInstance } from '../util/axios';
import { isAuthenticated } from '../util/authentication';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount = () => {
        getAxiosInstance().get('/company/list')
            .then((response) => {
                console.log(response.data);
                this.setState({ list: response.data.reverse() });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    navigateToProfile = async () => {
        if (await isAuthenticated()) {
            this.props.navigation.navigate('Profile');
        } else {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Header searchBar rounded transparent>
                        <Item style={{ flex: 4 }} >
                            <Icon name="restaurant" style={{ color: "#FF7A00" }} />
                            <Input placeholder="Procurar Restaurante" placeholderTextColor="#FF7A00" />
                        </Item>
                        <Right>
                            <Button transparent onPress={() => this.navigateToProfile()}>
                                <Icon name="person" />
                            </Button>
                        </Right>
                    </Header>
                    {this.state.list.map(element => {
                        return (
                            <RestaurantCard
                                onPress={() => this.props.navigation.navigate('Reservation')}
                                navigation={this.props.navigation}
                                restaurant={element} />
                        );
                    })}
                </Container>
            </StyleProvider>
        );
    }
}
export default withNavigation(Home);