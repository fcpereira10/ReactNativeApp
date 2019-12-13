import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, StyleProvider } from 'native-base';
import SideBar from './SideBar.js';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import commonColor from '../native-base-theme/variables/commonColor';
export default class Home extends Component {
    closeDrawer = () => {
        this._drawer._root.close();
    }
    openDrawer = () => {
        this._drawer._root.open();
    }
    render() {   
        return (
          <Drawer
            ref={(ref) => { this._drawer = ref; }}
            content={<SideBar />} >
                <StyleProvider style={getTheme(commonColor)}>
            <Container>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon name='menu'/>
                        </Button>    
                    </Left>
                    <Body>
                    <Title><Text> title </Text></Title>
                    </Body>  
                    <Right>
                    </Right> 
                </Header>
                 <Content>
                  
                </Content>
                <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
            </Container>
            </StyleProvider>
          </Drawer>
        );
    
  }
}