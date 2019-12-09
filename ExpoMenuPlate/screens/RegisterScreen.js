import React from 'react';
import Costumer from "../components/RegisterCostumer";
import Company from "../components/RegisterCompany";
import { Container, Header, Tabs, Tab } from 'native-base';


function App(){
  return(
    <Container>
      <Header hasTabs/>
        <Tabs>
          <Tab heading="Cliente">
            <Costumer />
          </Tab>
          <Tab heading="Empresa">
            <Company />
          </Tab>
        </Tabs>
  </Container>
  )
}
export default App;