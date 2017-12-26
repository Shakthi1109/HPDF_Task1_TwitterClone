import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;

export default class Moments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2() {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color:'blue'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'black'}}>Moments</Title>
          </Body>
          <Right />
        </Header>
        <Content>
    <Text style={{fontSize:28, color:'black', fontWeight:'bold', paddingTop:220, paddingLeft:125 }}>
            No Moments.
            </Text>
      <Text style={{fontSize:20, color:'black', paddingTop:10, paddingLeft:40}}>
            You haven't created any moments yet. When you do, you'll find them here.
            </Text>
        </Content>
      </Container>
    );
  }
}