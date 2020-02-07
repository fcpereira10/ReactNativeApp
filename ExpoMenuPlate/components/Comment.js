import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon} from 'native-base';
import { withNavigation } from 'react-navigation';

class Comment extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                Menu de 12€ bom. Comida boa e bem apresentada. Serviço fraco. Ninguém para nos receber na sala quando cheguei. Deu pena. 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Toni Bagaços</Text>
            </CardItem>
            <CardItem >
                <Button iconLeft primary>
                <Icon name='bookmarks' />
                <Text>Aprovar</Text>
                </Button>
                <Button iconRight danger>
                <Text>Remover</Text>
                <Icon name='trash' />
                </Button>
            </CardItem>
         </Card>

         <Card>
            <CardItem>
              <Body>
                <Text>
                Optimo! lugar muito elegante, comida de alta qualidade e serviço personnalizado parabens 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Carlos Castro</Text>
            </CardItem>
            <CardItem >
                <Button iconLeft primary>
                <Icon name='bookmarks' />
                <Text>Aprovar</Text>
                </Button>
                <Button iconRight danger>
                <Text>Remover</Text>
                <Icon name='trash' />
                </Button>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(Comment);