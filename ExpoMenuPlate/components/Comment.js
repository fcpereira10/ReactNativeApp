import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import { getAxiosInstance } from '../util/axios';
import { isAuthenticated } from '../util/authentication';

const CommentItem = (props) => {
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>
            {props.comment.comment}
          </Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text>{props.comment.username}</Text>
      </CardItem>
      <CardItem >
        <Button iconLeft primary onPress={() => props.onEdit(props.comment._id, 1)}>
          <Icon name='bookmarks' />
          <Text>Aprovar</Text>
        </Button>
        <Button iconRight danger onPress={() => props.onEdit(props.comment._id, 2)}>
          <Text>Remover</Text>
          <Icon name='trash' />
        </Button>
      </CardItem>
    </Card>
  );
}

class Comment extends Component {
  static navigationOptions = {
    title: 'Comment',
  };

  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  editComment = (id, status) => {
    getAxiosInstance().get('/company/editcomment?id=' + id + "&status=" + status)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateComments = () => {
    getAxiosInstance().get('/company/allcomments')
      .then((response) => {
        this.setState({ list: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount = () => {
    this.updateComments();
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          {this.state.list.map(element => {
            return (
              <CommentItem
                navigation={this.props.navigation}
                onEdit={this.editComment}
                comment={element} />
            );
          })}
        </Content>
      </Container>
    );
  }
}

export default withNavigation(Comment);