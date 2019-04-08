import React, {Component} from 'react';
import {Platform, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';
const instructions = Platform.select({
    ios: 'Press Cmd+R  to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Teselia extends Component {
    handlePress = () => {
      console.log(this.props.navigation)  
      this.props.navigation.navigate('Pokeplace')
    }
    
    render() {
      return (
        <Container style={styles.container}>
       
        <Header style={{backgroundColor:'#0e283a'}} ><Text style={{color:'white', fontSize:25}}>Teselia</Text></Header>
      
          <Content>
          <ScrollView>
            {/* --------------------------------------------------------------------- */}
            <Card style={{flex: 1}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Feraligatr</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/5/51/Feraligatr.png/revision/latest?cb=20150214145042'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Golpea el suela a una velocidad de vertigo
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
             {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Noctowl</Text>
                    <Text note>Tipo normal</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/37/Noctowl.png/revision/latest?cb=20140206195703'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Posee una vista privilegiadad
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
  
              <Card style={{flex: 0}}>
              
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Ledyba</Text>
                    <Text note>Tipo bicho</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/a/a8/Ledyba.png/revision/latest?cb=20140206212813'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Dispersa un aroma en el ambiente
                  </Text>
            </Body>
              </CardItem>
      
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
              {/* ---------------------------------------------------------------------------------------------------- */}
              {/* ------------------------------------------------------------------------------------ */}
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Chinchou</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/b/b1/Chinchou.png/revision/latest?cb=20151017013911'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                  libera cargas electricas en el agua
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Xatu</Text>
                    <Text note>Tipo psiquico</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/e/e0/Xatu.png/revision/latest?cb=20140206223925'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Ve el futuro
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Lanturn</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/1/16/Lanturn.png/revision/latest?cb=20140206214103'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Genera una luz segadora
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Mareep</Text>
                    <Text note>Tipo electrico</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/da/Mareep.png/revision/latest?cb=20140206223955'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Genera poderosas ondas estaticas
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Ampharos</Text>
                    <Text note>Tipo electrico</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/f/f5/Ampharos.png/revision/latest?cb=20150621184738'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Genera cargas de luz
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Hoppip</Text>
                    <Text note>Tipo planta</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/90/Hoppip.png/revision/latest?cb=20151017011541'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Capacidad para flotar en el aire
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Skiploom</Text>
                    <Text note>Tipo planta </Text>
                  </Body>
                </Left> 
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/f/f1/Skiploom.png/revision/latest?cb=20150906183239'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Tiene la capacidad de identificar la temperatura
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Azumarill</Text>
                    <Text note>Tipo agua</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/1/1a/Azumarill.png/revision/latest?cb=20140207184412'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Genera burbujas de agua
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
                  <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  
                  <Body>
                    <Text>Jumpluff</Text>
                    <Text note>Tipo hielo </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/4/43/Jumpluff.png/revision/latest?cb=20151017005916'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                  <Text>
                    Tiene la habilidad de volar
                  </Text>
            </Body>
              </CardItem>
                  {/* -------------------------------------------------------------------------------- */}
            </Card>
            <CardItem style={{backgroundColor: '#705751'}}>
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

  export default Teselia