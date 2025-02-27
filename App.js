import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

class App extends Component {

  render() {
    return(
        <View>
          <Text style={{color:'#483D8B', fontSize:65,margin:50,fontWeight:"normal"}}
          >Aplicacao inicial</Text>
          <Text>Espaço inicial Aplicaçao</Text>
          <Text>Versao 1.0</Text>

        <Image
        
        source={{uri: 'https://images.pexels.com/photos/29493834/pexels-photo-29493834.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}}
        style={{width:300, height:300}}
        />


        </View>
    )


  }


}

export default App;