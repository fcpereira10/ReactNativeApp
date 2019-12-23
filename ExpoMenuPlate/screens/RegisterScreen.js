import React from 'react';
import Costumer from "../components/RegisterCostumer";
import Company from "../components/RegisterCompany";
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
import { Container, Header, Tabs, Tab, Left, Right, Body, Button, Icon, Text, Title, StyleProvider } from 'native-base';

function App(){
  return(
    <StyleProvider style={getTheme(commonColor)}>
    <Container>
      <Header hastabs transparent style={{height: 0, paddingTop: 0}}>
          <Left>
          </Left>
          <Body >
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
  </StyleProvider>
  )
}
export default App;