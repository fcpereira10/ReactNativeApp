import React, { Component } from 'react';
import { Container, Header, Thumbnail, Card, CardItem, H1, H3, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import RestaurantCard from '../components/RestaurantCard'
import { withNavigation } from 'react-navigation';
import { Platform, View, TouchableOpacity } from "react-native";
import { destroyAccessToken, getPayload } from '../util/authentication';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                userId: "",
                email: "",
                name: ""
            }
        }
    }

    componentDidMount = async () => {
        this.setState({
            user: await getPayload()
        });
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
                                    <H1 style={{ paddingTop: 20, alignSelf: 'center' }}>{this.state.user.name}</H1>
                                    <Text style={{ paddingTop: 10, alignSelf: 'center' }}>
                                        <Icon name='navigate' />
                                        <H3> Morada</H3>
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card transparent>
                            <CardItem>
                                <Body>
                                    {/* <Button rounded style={{ width: 200, alignSelf: 'center' }}><Text style={{ fontSize: 17, color: 'black' }}>Editar Perfil</Text></Button> */}
                                    <Button rounded style={{ width: 200, alignSelf: 'center' }}><Text style={{ fontSize: 17, color: 'black' }} onPress={() => this.props.navigation.navigate('History')}>Reservas</Text></Button>
                                    <View style={{ paddingTop: 20, alignSelf: 'center', marginTop: 4 }}>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 17, color: '#FF8B2D' }} onPress={() => {
                                                this.props.navigation.navigate('Login');
                                                destroyAccessToken();
                                                /*console.log("asdasdasdsa");
                                                console.log(getPayload());*/
                                            }}>Terminar Sessão</Text>
                                        </TouchableOpacity>
                                    </View>
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