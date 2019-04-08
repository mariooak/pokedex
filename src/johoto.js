import React, {Component} from 'react';
import {Platform, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body } from 'native-base';

const instructions = Platform.select({
    ios: 'Press Cmd+R  to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Johoto extends Component {
    handlePress = () => {
      console.log(this.props.navigation)  
      this.props.navigation.navigate('Pokeplace')
    }
    
    render() {
      return (
        <Container style={styles.container}>
        <Header style={{backgroundColor:'#0e283a'}} ><Text style={{color:'white', fontSize:25}}>Johto</Text></Header>
      
          <Content>
          <ScrollView>
            {/* --------------------------------------------------------------------- */}
            <Card style={{flex: 1}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Voltorb</Text>
                    <Text note>Tipo electrico</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/8/80/Voltorb.png/revision/latest?cb=20090916184937'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Pokemon electrico
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
             {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Marowak</Text>
                    <Text note>Tipo Tierra</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/c/c4/Marowak.png/revision/latest?cb=20161104013901'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Es agil y fuerte
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
  
              <Card style={{flex: 0}}>
              
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Sandslash</Text>
                    <Text note>Tipo suelo</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/1/13/Sandslash.png/revision/latest?cb=20140809022452'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Defensa alta invulnerable
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
              {/* ---------------------------------------------------------------------------------------------------- */}
              {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Exeggutor</Text>
                    <Text note>Tipo planta</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/e/e0/Exeggutor.png/revision/latest?cb=20080908162819'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Mantiene siempre un estado de calma
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Mr.Mine</Text>
                    <Text note>Psiquico</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/4/4f/Mr._Mime.png/revision/latest?cb=20080909112846'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Habilidad para aturdir y manipular
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Scyther</Text>
                    <Text note>Tipo bicho</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/c/c2/Scyther.png/revision/latest?cb=20080909114754'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Velocidad en el aire y eficas en sus ataques
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Electabuzz</Text>
                    <Text note>Tipo electrico</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/3a/Electabuzz.png/revision/latest?cb=20080908162703'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Lanza terribles ataques electricos
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Magbar</Text>
                    <Text note>Tipo fuego</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/4/46/Magmar.png/revision/latest?cb=20080909112730'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Crea ondas con estallidos de fuego 
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Pinsir</Text>
                    <Text note>Tipo bicho</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/b/b4/Pinsir.png/revision/latest?cb=20080909114348'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Increiblemente fuerte
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Tauros</Text>
                    <Text note>Tipo nornal</Text>
                  </Body>
                </Left> 
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/98/Tauros.png/revision/latest?cb=20080909115022'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Causa un poderosa envestida
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Jynx</Text>
                    <Text note>Tipo hilo</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/e/e2/Jynx.png/revision/latest?cb=20080909112342'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Congela en el acto
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Hitmonlee</Text>
                    <Text note>Tipo lucha</Text>
                  </Body>
                </Left> 
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/0/0f/Hitmonlee.png/revision/latest?cb=20080909112242'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Propina patadas demoledoras
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#e267aa'}}>
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

  export default Johoto