import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, Badge, Icon } from 'native-base';

const UserDetails = (props) => {
  UserDetails.propTypes = {
    titleText: PropTypes.string,
    bodyText: PropTypes.string,
    hashText: PropTypes.string,
    twitterName: PropTypes.string,
    lastSeenTime: PropTypes.string
};
  const { titleText, bodyText, hashText, twitterName, lastSeenTime} = props;
  

return (
<View>
   <View style={{flexDirection: 'row'}}>
      <Text style={styles.titleText} onPress={this.onPressTitle}>
          {titleText  }
      </Text><Text> </Text>
       <Badge small primary>
     <Icon name="ios-checkmark-outline" style={{ fontSize: 30, color: '#fff', lineHeight: 24 }}/>
    </Badge>
      <Text note>  {twitterName}</Text>
        <Text note>{lastSeenTime}</Text>
      </View>
      <Text style={styles.baseText}>
        {bodyText}
      </Text>
      <Text style={styles.hashText}>
        {hashText}
      </Text>
    </View>
    );

};

const styles = {
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  hashText: {
    fontFamily: 'Cochin',
    color:'#33c5ff',
  },

};

export default UserDetails ;
