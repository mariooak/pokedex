import React, {Component} from 'react';
import {Platform, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';

const instructions = Platform.select({
    ios: 'Press Cmd+R  to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Alola extends Component {
    handlePress = () => {
      console.log(this.props.navigation)  
      this.props.navigation.navigate('Pokeplace')
    }
    
    render() {
      return (
        <Container style={styles.container}>
       
        <Header style={{backgroundColor:'#0e283a'}} ><Text style={{color:'white', fontSize:25}}>Aloa</Text></Header>
      
          <Content>
          <ScrollView>
            {/* --------------------------------------------------------------------- */}
            <Card style={{flex: 1}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Breloom</Text>
                    <Text note>Tipo planta</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/39/Breloom.png/revision/latest?cb=20170615200720'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Agil luchador
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
             {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Ninjask</Text>
                    <Text note>Tipo bicho</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/d1/Ninjask.png/revision/latest?cb=20080910095956'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Un pokemon altamente veloz 
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
  
              <Card style={{flex: 0}}>
              
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Whismur</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/f/f4/Whismur.png/revision/latest?cb=20141113220800'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Emito fuertes ondas sonoras
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
              {/* ---------------------------------------------------------------------------------------------------- */}
              {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Hariyama</Text>
                    <Text note>Tipo lucha</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/c/cb/Hariyama.png/revision/latest?cb=20080910095151'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Es un experto luchador
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Nosepass</Text>
                    <Text note>Tipo roca</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/5/52/Nosepass.png/revision/latest?cb=20080910100238'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Es poderoso en su defensa
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Delcatty</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/3e/Delcatty.png/revision/latest?cb=20170617005909'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Es un poke normal 
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Croconaw</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/d7/Croconaw.png/revision/latest?cb=20140205231731'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Posee una mandibula destructora
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Turtwig</Text>
                    <Text note>Tipo planta</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/c/c8/Turtwig.png/revision/latest?cb=20151017105732'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Se recarga de energia con la luz del sol
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Staravia</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/df/Staravia.png/revision/latest?cb=20080715122431'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Es una especie que se agrupa
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Kricketot</Text>
                    <Text note>Tipo bicho</Text>
                  </Body>
                </Left> 
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/df/Kricketot.png/revision/latest?cb=20080715135648'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Emito sonidos potentes
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Glameow</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/0/08/Glameow.png/revision/latest?cb=20080715122820'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Ataca con sus filosas garras
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Mandibuzz</Text>
                    <Text note>Tipo siniestro</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/e/ef/Mandibuzz.png/revision/latest?cb=20110312230037'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Es oportunista y diestro al atacar presas debiles
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#b2132b'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                         
              </ScrollView>
          </Content>
            
        </Container> 
       
        );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    button: {
      height: 40,
      width: '90%',
      borderColor: 'blue',
      borderWidth: 1,
      marginBottom: 8
      }

  });

  export default Alola