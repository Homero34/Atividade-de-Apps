import React, { Component } from "react";
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import FuscaIMG from "App_Android/Atividade-de-Apps/assets/Fusca.jpeg"
import MustangIMG from "App_Android/Atividade-de-Apps/assets/Mustang.jpeg"


class App extends Component {

  render() {

    const styles = StyleSheet.create({

      container: {
        flex: 1 ,
        fontSize: 20 ,
        color: "#000000"
        
      },
      card: {

      position: 'relative',
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 16,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffset: {
      width: 0,
      height: 1,
    },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2
      },
      cardImg: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },

    })



    const  carros = [

      {
        id: "1" ,
        name: "Fusca",
        Ano: "1930",
        Cor: "Amarelo",
        imagem: FuscaIMG
      },
      {
        id : "2",
        name: "Mustang",
        Ano: "1964",
        Cor: "Preto",
        imagem: MustangIMG
      }



    ]

    return(



        <View style = {styles.container}>
          <Text>Aplicacao inicial</Text>
            <FlatList
          data={carros}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
           <View style = {styles.card}/>
           





          ) }
        />
          
          
          
          
          
          
          
          
        
        
        </View>
        

  
    )
    


  }


}

export default App;