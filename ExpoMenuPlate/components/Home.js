import React, { Component } from 'react';
import { Container, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
export default class Home extends Component {

    componentDidMount = () => {
    };

    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Header transparent style={{ height: 60, paddingTop: 15 }}>
                        <Left>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                        </Right>
                    </Header>

                    <RestaurantCard />

                    <Footer style={{ borderTopWidth: 0, marginBottom: 10 }}>
                        <FooterTab style={{ backgroundColor: "#FFF" }}>
                            <Button trnasparent style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Icon name="star" />
                            </Button>
                            <Button vertical style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Icon active name="restaurant" />
                            </Button>
                            <Button vertical style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Icon name="person" />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );

    }
}