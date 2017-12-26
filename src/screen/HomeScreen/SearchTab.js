import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Content, Header, Item, Icon, Input, Button, Text, Fab, List, ListItem} from 'native-base';
import { FooterBottom } from '../../components';


class SearchScreen extends Component  {
  static navigationOptions = {
    
    tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" style={{color: tintColor}} />
    ),
     }
 
constructor() {
    super();
    this.state = {
      active: true,
    };
  
  }
render() {
 
    return (
      <Container>
        
        
          <Content>
            <List style={{paddingRight:13}}>
            <ListItem>
              <Text style={{fontSize:20, color:'black', paddingTop:5}}>  Trends for you</Text>
            </ListItem>
            <ListItem>
              <Text>  1   #Balloon29thDec</Text>
            </ListItem>
            <ListItem>
              <Text>  2   #IndiaForJadhav</Text>
            </ListItem>
                <ListItem>
              <Text>  3   #Maari2</Text>
            </ListItem>
          </List>
      
  
           </Content>
           <Fab
            active={this.state.active}
            style={{ backgroundColor: 'blue', marginBottom: 30 }}
            position="bottomRight"
            onPress={() => this.setState({ active:!this.state.active })}>
            <Icon name="logo-twitter" />
        
            </Fab>
            

        
        <FooterBottom />
        </Container>
      
    );
}
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
});

export default SearchScreen;