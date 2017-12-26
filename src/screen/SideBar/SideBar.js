import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import { Header, Footer, Left, Right, Card,CardItem, Text, Body, Container, Thumbnail, List, ListItem, Content, View, Icon } from "native-base";

const routes = [{name: "Profile",icon: 'ios-contact-outline'},{name: "Lists", icon: 'ios-list-box-outline'},{name: "Moments",icon: 'ios-flash-outline'}, {name: 'Highlights',icon:'ios-cube-outline'} ];
let userdetails='';

export default class SideBar extends React.Component {
 
  constructor() {
    super();
    

    userdetails = {
          username: 'Shakthivel',
          userid: '@Shakthi7415',
          following: 57,
          followers: 639,
          thumbnail: '../../img/me.jpg',
        };
        console.log(userdetails + 'user');

  }

  render() {

    const {username, userid,thumbnail,following,followers} = userdetails;
    console.log(username);
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('../../img/me.jpg')} />
              <Text style={{fontWeight: 'bold'}}>{username}</Text>
              <Text note>{userid}</Text>
              <Text style={{fontSize:1}}>  </Text>
                  
              
              <View style = {{flexDirection: 'row'}} >
                <Text>{following} Following </Text>
                <Text>  </Text>
                <Text >{followers} Followers</Text>
              </View>
            </View>
            </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>
          
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(data.name)}
                  icon>
                <Left>
                <Icon name={data.icon}/>
                
              </Left>
              <Body>
              <Text style={{fontSize:20}}>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text style={{fontSize:18}}>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text style={{fontSize:18}}>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
            </Content>
          <Footer style={{backgroundColor:'white'}}>
            <Left>
             <Icon style={{ marginLeft: 10 }} name='ios-moon-outline'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 10 }} name='md-qr-scanner'></Icon>
            </Right>
          </Footer>
      
      </Container>
    );
  }
}
