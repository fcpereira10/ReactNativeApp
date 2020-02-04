import React, { Component } from 'react';
import { Container, Picker, Thumbnail, List, ListItem, Form, View, Header, DatePicker, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
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
          <Text style={{ paddingTop: 20, fontSize: 25, alignSelf: 'center' }}>{this.props.< navigation.getParam('name', 'cancro')}</Text>
          <Content scrollEnabled={false}>
            <Form>
              <Item rounded>
                <DatePicker
                  defaultDate={new Date(1976, 12, 23)}
                  minimumDate={new Date(2020, 2, 1)}
                  maximumDate={new Date(2024, 12, 31)}
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

                <Icon name="calendar" style={{ color: "#555555" }} />
              </Item>
              <Item rounded>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="time" style={{ color: "#555555" }} />}
                  style={{ width: undefined }}
                  placeholder="Horário Pretendido"
                  placeholderStyle={{ color: "#555555" }}
                  placeholderIconColor="#FF7A00"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                  renderHeader={backAction =>
                    <Header transparent style={{ height: 50 }}><Left><Button transparent onPress={backAction}><Icon name="arrow-back" style={{ color: "#FF7A00" }} /></Button></Left><Body style={{ flex: 3 }}><Title style={{ color: "#fff" }}>Horário</Title></Body><Right /></Header>}>

                  <Picker.Item label="Almoço - 12h00" value="key0" />
                  <Picker.Item label="Almoço - 13h00" value="key1" />
                  <Picker.Item label="Almoço - 14h00" value="key2" />
                  <Picker.Item label="Jantar - 19h00" value="key3" />
                  <Picker.Item label="Jantar - 20h00" value="key4" />
                  <Picker.Item label="Jantar - 21h00" value="key5" />
                </Picker>

              </Item>
              <Item rounded>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="people" style={{ color: "#555555" }} />}
                  style={{ width: undefined }}
                  placeholder="Número de Pessoas"
                  placeholderStyle={{ color: "#555555" }}
                  placeholderIconColor="#FF7A00"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                  renderHeader={backAction =>
                    <Header transparent style={{ height: 50 }}><Left><Button transparent onPress={backAction}><Icon name="arrow-back" style={{ color: "#FF7A00" }} /></Button></Left><Body style={{ flex: 3 }}><Title style={{ color: "#fff" }}>Número de Pessoas</Title></Body><Right /></Header>}>

                  <Picker.Item label="1 Pessoa" value="key0" />
                  <Picker.Item label="2 Pessoas" value="key1" />
                  <Picker.Item label="3 Pessoas" value="key2" />
                  <Picker.Item label="4 Pessoas" value="key3" />
                  <Picker.Item label="5 Pessoas" value="key4" />
                  <Picker.Item label="6 Pessoas" value="key5" />
                </Picker>
              </Item>
              <Button rounded>
                <Text style={{ fontSize: 20, color: "#fff" }}>Reservar</Text>
              </Button>
            </Form>

          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
export default withNavigation(Reservation);