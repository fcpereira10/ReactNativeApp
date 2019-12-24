import React, { Component } from 'react';
import { Container, Header, Thumbnail, Card, CardItem,H1, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
import { withNavigation } from 'react-navigation';

class Profile extends Component {

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
                                    <Thumbnail source={require('../assets/images/person-icon.png')} style={{width: 80, height: 80, borderRadius: 80/2}}/>
                                    <H1 style={{paddingTop: 20 ,alignSelf: 'center'}}>Francisco Pereira</H1>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider >
        );

    }
}
export default withNavigation(Profile);