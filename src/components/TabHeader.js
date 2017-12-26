import React from 'react';
import { TouchableWithoutFeedback, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Thumbnail, Header, Title, Item, Input, Left, Icon, Right, Button, Body, Content, Fab, Tab, Tabs, TabHeading, Text } from "native-base";

const HomeHeader = (props) => {
const {navigation,tabKey} =props;
console.log(navigation);
  let body=null;
  if(tabKey=='Search') 
  { 
    body=<Body>
    <Item rounded style={{ width: 250, backgroundColor: 'lightgrey', height:37 }}>
    <Input placeholder="  Search Twitter"  onChangeText={(text) => navigation.navigate("SearchScreen")}/>
    </Item> 
    </Body>;
  } 

  else 
  {
    body=<Body>
    <Title style={{color: 'black',alignContent: 'flex-start'}}>{tabKey}</Title>
    </Body>
  }
    return (
    <Header hasTabs style={{backgroundColor:'white'}}>    
    <Left>   
       <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>         
        <Thumbnail source={require('../img/me.jpg')} small/>
    </Button>
    </Left>
   {body}
    <Right/>
    </Header>
  );
};

export default HomeHeader;
