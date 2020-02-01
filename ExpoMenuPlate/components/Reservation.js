import React, { Component } from 'react';
import { Container, Picker, Thumbnail, Form, View, Header, DatePicker, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { withNavigation } from 'react-navigation';
import { getAxiosInstance } from '../util/axios';

class Reservation extends Component {
    static navigationOptions = {
        title: 'Reservation',
    };

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
        this.state = {
            selected2: undefined
          };
        }
        onValueChange2(value: string) {
          this.setState({
            selected2: value
          });
      }

      setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
                <Thumbnail large source={require('../assets/images/logo.png')} />
          <Text style={{ paddingTop: 20, fontSize: 25, alignSelf: 'center' }}>Nome do Restaurante</Text>
          <Content scrollEnabled={false}>
            <Form>
                <Item rounded>
                    <DatePicker
                    minimumDate={new Date(2020, 2, 1)}
                    maximumDate={new Date(2022, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"slide"}
                    androidMode={"default"}
                    placeHolderText="Data Reserva"
                    textStyle={{ color: "#555555" }}
                    placeHolderTextStyle={{ color: "#555555" }}
                    onDateChange={this.setDate}
                    disabled={false}  
                    />
                </Item>
                <Item rounded>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Horário Pretendido"
                placeholderStyle={{ color: "#555555" }}
                placeholderIconColor="#FF7A00"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                 renderHeader={backAction =>
                <Header transparent style={{ height: 100 }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#FF7A00" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Your Header</Title>
                  </Body>
                  <Right />
                </Header>}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
           
            </Form>
            </Content>
                </Container>
            </StyleProvider>
        );
    }
}
export default withNavigation(Reservation);