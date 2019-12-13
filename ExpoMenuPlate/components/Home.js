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
                <Header transparent style={{height: 60, paddingTop: 15}}>
                    <Left>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon name='menu'/>
                        </Button>    
                    </Left>
                    <Body>
                    </Body>  
                    <Right>
                    </Right> 
                </Header>
                 <Content>
                  
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                        <Icon name="apps" />

                        </Button>
                        <Button vertical>
                        <Icon name="camera" />

                        </Button>
                        <Button vertical active>
                        <Icon active name="navigate" />

                        </Button>
                        <Button vertical>
                        <Icon name="person" />

                        </Button>
                    </FooterTab>
                    </Footer>
            </Container>
            </StyleProvider>
          </Drawer>
        );
    
  }
}