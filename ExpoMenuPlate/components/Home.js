import React, { Component } from 'react';
import { Container, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
import { withNavigation } from 'react-navigation';
import { getAxiosInstance } from '../util/axios';

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
                this.setState({ list: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Header searchBar rounded transparent style={{ height: 60, paddingTop: 15, paddingBottom: 15 }}>
                        <Item style={{ marginLeft: 15 }}>
                            <Icon name="search" />
                            <Input placeholder="Procurar" />
                        </Item>
                        <Button transparent onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name="person" />
                        </Button>
                    </Header>
                    {this.state.list.map(element => {
                        console.log(element);
                        return (<RestaurantCard
                            key={element.address}
                            name={element.name}
                            address={element.address}
                            description={"falta isto"}
                            stars={"5"} />);
                    })}
                </Container>
            </StyleProvider>
        );
    }
}
export default withNavigation(Home);