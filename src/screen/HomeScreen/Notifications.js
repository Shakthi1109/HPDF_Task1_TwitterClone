import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header, Item, Icon, Input, Button, Text, Fab } from 'native-base';
import { FooterBottom } from '../../components';

class Notifications extends Component  {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon ios='ios-notifications-outline' android='ios-notifications-outline' style={{color: tintColor}} />
    ),
     }

constructor() {
    super();
    this.state = {
      active: true,
    };
  
  }render() {
    return (
      <Container>
        
          <View style={{flex:1}}>

            <Text style={{fontSize:28, color:'black', fontWeight:'bold', paddingTop:245, paddingLeft:50 }}>
            Nothing to see here... yet.
            </Text>
            </View>

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

export default Notifications;