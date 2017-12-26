import React from 'react';
import { Footer, FooterTab, Button, Text, Right, Icon } from 'native-base';

const FooterBottom = () => {

return (
          <Footer style={{backgroundColor: 'white', height:45 }}>
            <FooterTab style={{backgroundColor: 'white'}}>
             <Button>
              <Text style={{fontSize: 12, color: 'blue', fontWeight: 'bold'}}>All</Text>
             </Button>
             <Button>
              <Text style={{  fontWeight: 'bold'}}>Mentions</Text>
             </Button>
            </FooterTab>
            <Right>
              <Icon style={{ marginRight: 10, color: 'blue' }} name='ios-settings-outline'></Icon>
            </Right>
          </Footer>
    );
};

export { FooterBottom };