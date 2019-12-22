import React, { Component } from 'react';
import { Container, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'


export default class Home extends Component {

    componentDidMount = () => {
    };

    render() {
        const {navigation}= this.props;
      
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Header searchBar rounded transparent style={{ height: 60, paddingTop: 15, paddingBottom: 15 }}>
                        
                        
                            <Item style={{marginLeft: 15}}>
                                <Icon name="search" />
                                <Input  placeholder="Procurar" />
                            </Item>
                        
                        
                            <Button transparent onPress={() => navigation.navigate('Login')}>
                                <Icon name="person" />
                            </Button>
                        
                    </Header>

                    <RestaurantCard />
                </Container>
            </StyleProvider>
        );

    }
}