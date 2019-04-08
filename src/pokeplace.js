import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Button} from 'native-base';

const instructions = Platform.select({
    ios: 'Press Cmd+R  to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Pokeplace extends Component {
        
    render() {
      const { navigate }= this.props.navigation;
      
      return (
        <Container style={styles.container}>
        <Header><Text style={{color:'white', fontSize:25}}>Place</Text></Header> 
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text style={styles.text}>Kanto</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={ () => navigate('Kanto')}/>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text style={styles.text}>Johto</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={ () => navigate('Johoto')}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.text}>Hoenn</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={ () => navigate('Hoenn')} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.text}>Sinnoh</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={ () => navigate('Sinnoh')} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.text}>Teselia</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={ () => navigate('Teselia')}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.text}>Kalos</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={ () => navigate('Kalos')}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.text}>Alola</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={ () => navigate('Alola')}/>
              </Right>
            </ListItem>
          
         
          </List>
        </Content>
        <Button block onPress={ () => navigate('Home')} style={styles.button}><Text>Go to Menu</Text></Button>
   
      </Container>
       );
    
  }
   
        
    
    
   
    
   
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1d2c3d',
    },
    welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color:'#fafbfd',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8,
      marginBottom: 8
    },
    container:{
      backgroundColor: '#1d2c3d',
   
    },
    text:{
      color:'white'
    }
   

  });

  export default Pokeplace
  