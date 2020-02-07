import React, { Component, useState } from 'react';
import { Container, CheckBox, Card, CardItem, Picker, Thumbnail, Textarea, List, ListItem, Form, View, Header, DatePicker, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { withNavigation } from 'react-navigation';
import { getAxiosInstance } from '../util/axios';
import { getPayload } from '../util/authentication';

const MenuItem = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <ListItem onPress={() => {
      props.click(props.item);
      setChecked(!checked);
    }}>
      <CheckBox checked={checked} />
      <Body>
        <Text>{props.item.name} {props.item.price}€</Text>
      </Body>
    </ListItem>
  );
}

class Reservation extends Component {
  static navigationOptions = {
    title: 'Reservation',
  };

  constructor(props) {
    super(props);
    this.state = {
      totalPeople: "",
      chosenDate: "",
      menuList: [],
      selectedMenu: [],
      time: "",
      restaurant: this.props.navigation.getParam('restaurant', null)
    };

    this.setDate = this.setDate.bind(this);
  }

  onReservationPress = async () => {
    const payload = await getPayload();

    getAxiosInstance().post('/company/addreservation', {
      companyId: this.state.restaurant._id,
      userId: payload.userId,
      order: this.state.selectedMenu,
      people: this.state.totalPeople,
      day: this.state.chosenDate,
      time: this.state.time,
    })
      .then(async (response) => {
        console.log(response.data);
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onMenuItemClicked = (item) => {
    let found = -1;

    for (let i = 0; i < this.state.selectedMenu.length; i++) {
      if (item._id == this.state.selectedMenu[i]._id) {
        found = i;
        break;
      }
    }

    const temp = [...this.state.selectedMenu];

    if (found === -1) {
      temp.push(item);
    } else {
      temp.splice(found, 1);
    }

    this.setState({
      ...this.state,
      selectedMenu: temp
    });
  }

  setDate(newDate) {
    this.setState({
      ...this.state, chosenDate: newDate
    });
  }

  componentDidMount = () => {
    getAxiosInstance().get('/company/menu?companyId=' + this.state.restaurant._id)
      .then((response) => {
        this.setState({
          ...this.state,
          menuList: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onTimeChanged = (value) => {
    console.log(value);
    this.setState({
      ...this.state,
      time: value
    });
  };

  onPeopleChanged = (value) => {
    this.setState({
      ...this.state,
      totalPeople: value
    });
  };

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Thumbnail large source={require('../assets/images/logo.png')} />
          <Text style={{ paddingTop: 20, fontSize: 25, alignSelf: 'center' }}>{this.state.restaurant.name}</Text>
          <Content>
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
                  placeholder="Horário Pretendido"
                  placeholderStyle={{ color: "#555555" }}
                  placeholderIconColor="#FF7A00"
                  selectedValue={this.state.time}
                  onValueChange={this.onTimeChanged}
                  renderHeader={backAction =>
                    <Header transparent style={{ height: 50 }}><Left><Button transparent onPress={backAction}><Icon name="arrow-back" style={{ color: "#FF7A00" }} /></Button></Left><Body style={{ flex: 3 }}><Title style={{ color: "#fff" }}>Horário</Title></Body><Right /></Header>}>
                  <Picker.Item label="Almoço - 12h00" value="Almoço - 12h00" />
                  <Picker.Item label="Almoço - 13h00" value="Almoço - 13h00" />
                  <Picker.Item label="Almoço - 14h00" value="Almoço - 14h00" />
                  <Picker.Item label="Jantar - 19h00" value="Jantar - 19h00" />
                  <Picker.Item label="Jantar - 20h00" value="Jantar - 20h00" />
                  <Picker.Item label="Jantar - 21h00" value="Jantar - 21h00" />
                </Picker>

              </Item>
              <Item rounded>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="people" style={{ color: "#555555" }} />}
                  placeholder="Número de Pessoas"
                  placeholderStyle={{ color: "#555555" }}
                  placeholderIconColor="#FF7A00"
                  selectedValue={this.state.totalPeople}
                  onValueChange={this.onPeopleChanged}
                  renderHeader={backAction =>
                    <Header transparent style={{ height: 50 }}><Left><Button transparent onPress={backAction}><Icon name="arrow-back" style={{ color: "#FF7A00" }} /></Button></Left><Body style={{ flex: 3 }}><Title style={{ color: "#fff" }}>Número de Pessoas</Title></Body><Right /></Header>}>
                  <Picker.Item label="1 Pessoa" value="1 Pessoa" />
                  <Picker.Item label="2 Pessoas" value="2 Pessoas" />
                  <Picker.Item label="3 Pessoas" value="3 Pessoas" />
                  <Picker.Item label="4 Pessoas" value="4 Pessoas" />
                  <Picker.Item label="5 Pessoas" value="5 Pessoas" />
                  <Picker.Item label="6 Pessoas" value="6 Pessoas" />
                </Picker>
              </Item>
            </Form>
            <List>
              <Text>Menu</Text>
              {this.state.menuList.map(element => {
                return (
                  <MenuItem
                    item={element}
                    click={this.onMenuItemClicked}
                  />
                );
              })}
            </List>
            <Textarea rowSpan={5} bordered placeholder="Notas" />
            <Button rounded onPress={() => this.onReservationPress()}>
              <Text style={{ fontSize: 20, color: "#fff" }}>Reservar</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider >
    );
  }
}
export default withNavigation(Reservation);