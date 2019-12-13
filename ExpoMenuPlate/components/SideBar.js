import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, Button} from "native-base";
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
            <Button>
                <Text style={{ fontSize: 17 }}>Entrar</Text>
              </Button>
        </Content>
      </Container>
    );
  }
}