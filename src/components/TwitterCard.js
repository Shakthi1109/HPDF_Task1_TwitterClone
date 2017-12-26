import React from 'react';
import { Image, View } from 'react-native';
import { Card, Content, CardItem, Form, Picker, Left, Right, Thumbnail, Body, Button, Icon, Text } from 'native-base';
import UserDetails from './UserDetails';
const Item = Picker.Item;

const TwitterCard = () => {

    return (   
         
<Content>
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../img/madi.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                  
                 <UserDetails
                   titleText="Hasura Education"
                   bodyText="The secret!"
                   hashText="#howtocode #learntocode #learnprogramming #Truth"
                   twitterName='@HasuraEd'
                   lastSeenTime='  10m'/>
                <Icon name='ios-arrow-dropdown-outline' style ={{right:15, fontSize:23}}/>
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
 
              
                <Image source={require('../img/hasura.jpg')} style={{height: 150, width: 320, left:75  }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="ios-chatbubbles-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>34</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="ios-git-compare" style={ styles.buttoncolor }/>
                <Text style={ styles.buttonTextStyle } >93</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="ios-heart-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>119</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="ios-mail-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>3</Text>
                 </Button>


           </CardItem>
         </Card>


         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../img/logo.jpg')}/>
            
               <Body style ={{flexDirection: 'row'}}>
                <UserDetails
                   titleText="Lamborghini"
                   bodyText="Today, we bring you the world's first Tron Lamborghini. Exquisite design, stunning performance."
                   hashText="#Tron #Avendator #Lamborghini #SinceWeMadeItPossible"
                   twitterName='@Lamborghini'
                   lastSeenTime='  2h'/>
                <Icon name='ios-arrow-dropdown-outline' style ={{right:15, fontSize:23}}/>
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
                <Image source={require('../img/lambo.jpg')} style={{height: 195, width: 310, left:85 }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="ios-chatbubbles-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>49</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="ios-git-compare" style={ styles.buttoncolor }/>
                <Text style={ styles.buttonTextStyle } >320</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="ios-heart-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>530</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="ios-mail-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>2</Text>
                 </Button>


           </CardItem>
         </Card>




         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../img/messilogo.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                 <UserDetails
                   titleText="Leo Messi"
                   bodyText="Celebrating at the Santiago Bernabeu Stadium."
                   hashText="#Barca #victory #hattrick"
                   twitterName='@LeoMessi10'
                   lastSeenTime='  1d'/>
                <Icon name='ios-arrow-dropdown-outline' style ={{right:15, fontSize:23}}/>
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
            <Image source={require('../img/messi.jpg')} style={{height: 150, width: 310, left:85 }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="ios-chatbubbles-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>548</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="ios-git-compare" style={ styles.buttoncolor }/>
                <Text style={ styles.buttonTextStyle } >744</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="ios-heart-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>912</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="ios-mail-outline" style={ styles.buttoncolor }/>
                 <Text style={ styles.buttonTextStyle }>8</Text>
                 </Button>


           </CardItem>
         </Card>


         </Content>
       
     );
   };

     const styles = {
          buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          },

          buttoncolor: {
          color: 'black'
          }

     };

export { TwitterCard };