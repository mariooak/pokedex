import React, {Component} from 'react';
import {Platform, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';
const instructions = Platform.select({
    ios: 'Press Cmd+R  to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Kalos extends Component {
    handlePress = () => {
      console.log(this.props.navigation)  
      this.props.navigation.navigate('Pokeplace')
    }
    
    render() {
      return (
        <Container style={styles.container}>
       
        <Header style={{backgroundColor:'#0e283a'}} ><Text style={{color:'white', fontSize:25}}>Kalos</Text></Header>
      
          <Content>
          <ScrollView>
            {/* --------------------------------------------------------------------- */}
            <Card style={{flex: 1}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Marill</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/5/55/Marill.png/revision/latest?cb=20160309224636'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                  Se sumerge y sedesplaza con agilidad
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
             {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Combusken</Text>
                    <Text note>Tipo fuego</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/c/cf/Combusken.png/revision/latest?cb=20141013195821'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                  Veloz alcansando altas temperaturas
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
  
              <Card style={{flex: 0}}>
              
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Blaziken</Text>
                    <Text note>Tipo fuego</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/a/ab/Blaziken.png/revision/latest?cb=20141214180502'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Expulsa fieras llamas
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
              {/* ---------------------------------------------------------------------------------------------------- */}
              {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Swampert</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/d7/Swampert.png/revision/latest?cb=20141214174804'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Extramadamente fuerte en el agua
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Linoone</Text>
                    <Text note>Tipo tierra</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/b/b5/Linoone.png/revision/latest?cb=20080910095404'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Agilidad para andar debajo de la tierra
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Cascoon</Text>
                    <Text note>Tipo bicho</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/7/7c/Cascoon.png/revision/latest?cb=20080910094532'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Recubierto con defensa efectiva
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Dustox</Text>
                    <Text note>Tipo bicho</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/1/12/Dustox.png/revision/latest?cb=20170617012425'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Su actividad es nocturna
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Ludicolo</Text>
                    <Text note>Tipo planta</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/6/69/Ludicolo.png/revision/latest?cb=20080910095506'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Esta capacitado con una alta defensa
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Wingull</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/f/ff/Wingull.png/revision/latest?cb=20151017012456'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Agil volador
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Taillow</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left> 
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/a/a3/Taillow.png/revision/latest?cb=20170422203719'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Tiene una alta voluntad de enfrentar a sus rivales
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Pelipper</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/8/8a/Pelipper.png/revision/latest?cb=20080729172648'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                  Es bastante agresio en su habitad
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Exploud</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/2/21/Exploud.png/revision/latest?cb=20170617014146'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Genera ondas fuertes de sonido
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#af610e'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Button block onPress={this.handlePress} style={styles.button}><Text>Go to back Place</Text></Button>
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
    
  });

  export default Kalos