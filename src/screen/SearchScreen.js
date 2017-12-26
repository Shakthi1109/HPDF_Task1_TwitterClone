import React from "react";
import { AppRegistry, Alert } from "react-native";

import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Item, Input, Title, Button, H1 } from "native-base";
import { FooterBottom } from "../components/index";


export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'SearchScreen',
    headerStyle:{ backgroundColor: '#FFF'},
    headerTitleStyle:{ color: 'blue'},
    }
 
  render() {
    return (
      <Container>
         <Header style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'blue'}} />
            </Button>
          </Left>
          <Body>
          <Item style={{width: 200}}>
          <Input placeholder="Search Twitter" />
        </Item>
          </Body>
          <Right />
        </Header>
        <Content padder>
         
        </Content>
        <FooterBottom/>
      </Container>
    );
  }
}

