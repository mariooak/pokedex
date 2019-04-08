import React, {Component} from 'react';
import {Platform, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body } from 'native-base';
const instructions = Platform.select({
    ios: 'Press Cmd+R  to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
   class Kanto extends Component {
    handlePress = () => {
      console.log(this.props.navigation)  
      this.props.navigation.navigate('Pokeplace')
    }
    
    render() {
      return (
      
     
        <Container style={styles.container}>
      <Header style={{backgroundColor:'#0e283a'}} ><Text style={{color:'white', fontSize:25}}>Kanto</Text></Header>
    
        <Content>
        <ScrollView>
          {/* --------------------------------------------------------------------- */}
          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Arbok</Text>
                  <Text note>Tipo Veneno</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/4/4d/Arbok.png/revision/latest?cb=20170615172348'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Velocidad y atanques precisos
                </Text>
          </Body>
            </CardItem>
    
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
           {/* ------------------------------------------------------------------------------------ */}
            <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Raticate</Text>
                  <Text note>Tipo normal</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/d6/Raticate.png/revision/latest?cb=20080723091809'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Instinto firme y fuerte cauteloso
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}

            <Card style={{flex: 0}}>
            
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Picachu</Text>
                  <Text note>Tipo electrico</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/7/77/Pikachu.png/revision/latest?cb=20150621181250'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Poderosas descargas electricas
                </Text>
          </Body>
            </CardItem>
    
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
            {/* ---------------------------------------------------------------------------------------------------- */}
            {/* ------------------------------------------------------------------------------------ */}
            <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Pidgey</Text>
                  <Text note>Tipo normal</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/b/b7/Pidgey.png/revision/latest?cb=20080719192400'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Alta velocidad en el aire y sentido de orientacion
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Vileplume</Text>
                  <Text note>Tipo planta</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/3/32/Vileplume.png/revision/latest?cb=20080909115204'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Polen y esporas toxicas
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Venonat</Text>
                  <Text note>Tipo bicho</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/d3/Venonat.png/revision/latest?cb=20080909115146'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Vision aguda
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Gloom</Text>
                  <Text note>Tipo planta</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/5/59/Gloom.png/revision/latest?cb=20080715114643'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Libera un desagradable aroma
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Golbat</Text>
                  <Text note>Tipo Veneno</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/2/2c/Golbat.png/revision/latest?cb=20170617042709'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Chupa la sangre de seres vivos
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Dugtrio</Text>
                  <Text note>Tipo Tierra</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/8/8b/Dugtrio.png/revision/latest?cb=20161018171550'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Trabaja sin descaso
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Persian</Text>
                  <Text note>Tipo normal</Text>
                </Body>
              </Left> 
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/b/b3/Persian.png/revision/latest?cb=20080909113950'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Detecta el movimiento del aire
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Chicorita</Text>
                  <Text note>Tipo planta</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/4/4e/Chikorita.png/revision/latest?cb=20140206203521'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Libera poderes con sus hojas
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Cyndaquil</Text>
                  <Text note>Tipo fuego</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/99/Cyndaquil.png/revision/latest?cb=20140206203643'}} style={{height: 200, width: 200, flex: 1, alignSelf:"center"}}/>
                <Text>
                  Libera llamas creando combustion
                </Text>
          </Body>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
          </Card>
          <CardItem style={{backgroundColor: '#0e283a'}}>
            </CardItem>
                {/* -------------------------------------------------------------------------------- */}
                <Button block onPress={this.handlePress} style={styles.button}><Text>Go to back P</Text></Button>
                       
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

  export default Kanto