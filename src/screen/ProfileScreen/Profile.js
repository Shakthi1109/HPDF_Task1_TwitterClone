import React from "react";
import { AppRegistry, Alert } from "react-native";

import { Text, Container, Card, CardItem, Body, Content, Header, Thumbnail, Left, Right, Icon, Title, Button, H1 } from "native-base";


export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
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
            <Title style={{color:'blue'}}>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>


          <Card>
            <CardItem>
              <Thumbnail source={require('../../img/me.jpg')} style={{height:50, width:50}} />
              <Text>   Shakthivel</Text>
            </CardItem>
          <CardItem>
              
              <Text>@Shakthi7415</Text>
            </CardItem>
            <CardItem>
              
              <Text>57  Following       639  Followers</Text>
            </CardItem>
            <CardItem>
              
              <Text></Text>
            </CardItem>

          </Card>
          </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
});
