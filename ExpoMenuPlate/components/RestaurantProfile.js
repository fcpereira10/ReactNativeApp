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
                                    <Thumbnail source={require('../assets/images/logo.png')} style={{ width: 80, height: 80, borderRadius: 80 / 2 }} />
                                    <H1 style={{ paddingTop: 20, alignSelf: 'center' }}>{this.props.name}</H1>
                                    <Text style={{ paddingTop: 10, alignSelf: 'center' }}>
                                        <Icon name='navigate' />
                                        <H3> {this.state.address}</H3>
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card transparent>
                            <Container>
                                <Header hasTabs />
                                <Tabs>
                                    <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                                        <Text>asdasdas</Text>
                                    </Tab>
                                    <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
                                        <Text>asdasdas</Text>
                                    </Tab>
                                    <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
                                        <Text>asdasdas</Text>
                                    </Tab>
                                </Tabs>
                            </Container>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider >
        );

    }
}
export default withNavigation(RestaurantProfile);