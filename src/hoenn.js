import React, {Component} from 'react';
import {Platform, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body } from 'native-base';

const instructions = Platform.select({
    ios: 'Press Cmd+R  to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Hoenn extends Component {
    handlePress = () => {
      console.log(this.props.navigation)  
      this.props.navigation.navigate('Pokeplace')
    }
    
    render() {
      return (
        <Container style={styles.container}>
        <Header style={{backgroundColor:'#7b4ddd'}} ><Text style={{color:'white', fontSize:25}}>Hoenn</Text></Header>
      
          <Content>
          <ScrollView>
            {/* --------------------------------------------------------------------- */}
            <Card style={{flex: 1}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Dinorina</Text>
                    <Text note>Tipo veneno</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/31/Nidorina.png/revision/latest?cb=20080909113735'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Expulsa puas venenosas
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
             {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Jigglypuff</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/a/af/Jigglypuff.png/revision/latest?cb=20150110232910'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Habilidad para cantar 
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
  
              <Card style={{flex: 0}}>
              
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Meowth</Text>
                    <Text note>Tipo normal </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/99/Meowth.png/revision/latest?cb=20160904210550'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Es extremada mente sigiloso
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
              {/* ---------------------------------------------------------------------------------------------------- */}
              {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Koffing</Text>
                    <Text note>Tipo veneno</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/b/b2/Koffing.png/revision/latest?cb=20080909112613'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                  Expulsa bombas de gases
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Lickitung</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/a/ab/Lickitung.png/revision/latest?cb=20080909112640'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Memoriza todo lo que esta asu alrededor
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Rhyhorn</Text>
                    <Text note>Tipo tierra </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/36/Rhyhorn.png/revision/latest?cb=20080909114734'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Recubierto con una defensa de acero
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Chansey</Text>
                    <Text note>Tipo Normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/2/2b/Chansey.png/revision/latest?cb=20170615202929'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Capacidad curativa
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Tangela</Text>
                    <Text note>Planta</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/0/03/Tangela.png/revision/latest?cb=20080909115011'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Posee habilidad para desplasarce
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Kangaskhan</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/39/Kangaskhan.png/revision/latest?cb=20080909112541'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Posee una enorme fuerza
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                    {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Horsea</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/6/6c/Horsea.png/revision/latest?cb=20080909112255'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Lanza ataques con su tinta
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Staryu</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left> 
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/e/e8/Staryu.png/revision/latest?cb=20080831213537'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Lanza chorros de agua
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Lanpras</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left> 
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/30/Lapras.png/revision/latest?cb=20080730095459'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Semantiene alerta en el agua 
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#7b4ddd'}}>
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

  export default Hoenn