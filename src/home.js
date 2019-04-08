import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image } from 'react-native';
import {Button, Text, Header} from 'native-base';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Home extends Component {
    handlePress = () => {
      console.log(this.props.navigation)  
      this.props.navigation.navigate('Login')
    }
    render() {
      return (
       
        
        <View style={styles.container}>
          <Header></Header>
        <Image source={require('./assets/pkimg.jpg')}
        style={{width:350, height:200, alignSelf:"center", marginTop:100}}
        ></Image> 
                  <Text style={styles.welcome}>Welcome to React pokedex</Text>
                        <Button block onPress={this.handlePress} style={styles.button}><Text>Welcome to pokeapp</Text></Button>
              </View>
    );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
       
        backgroundColor: '#1d2c3d'
    },
    welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color:'#fafbfd'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    button:{
      marginTop: 10
    },
  });

  export default Home  