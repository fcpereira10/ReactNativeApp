import React from 'react';
import Costumer from "../components/RegisterCostumer";
import Company from "../components/RegisterCompany";
import { Container, Header, Tabs, Tab, Left, Right, Body, Button, Icon, Text, Title } from 'native-base';

function App(){
  return(
    <Container>
      <Header hasTabs style={{backgroundColor: 'WHITE', textColor: 'black'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
          </Body>
          <Right>
          </Right>
      </Header>
      <Tabs tabBarUnderlineStyle={{borderBottomWidth:4, borderColor: '#FF7A00'}}>
          <Tab heading="Cliente" textStyle={{color: '#555555'}} activeTextStyle={{color: '#FF7A00'}} >
            <Costumer />
          </Tab>
          <Tab heading="Empresa" textStyle={{color: '#555555'}} activeTextStyle={{color: '#FF7A00'}}>
            <Company />
          </Tab>
        </Tabs>
  </Container>
  )
}
export default App;