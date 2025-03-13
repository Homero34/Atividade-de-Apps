import React, { Component } from "react";
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import FuscaIMG from "./assets/Fusca.png"
import MustangIMG from "./assets/Mustang.png"


class App extends Component {

  render() {

    const styles = StyleSheet.create({

      container: {
        flex: 1 ,
        fontSize: 20 ,
        color: "#000000"
        
      },
      card: {
<<<<<<< HEAD
        background-clip: content-box,
      position: "relative",
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 50,
=======

      position: "static",
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 16,
>>>>>>> 44b7b39983044ad3b4ee2e79de0e823603330443
      shadowColor: 'rgba(0, 0, 0, 1.5)',
      shadowOffset: {
      width: 0,
      height: 1,
<<<<<<< HEAD
      
    },
      shadowOpacity: 0.2,
      shadowRadius: 1.2 ,
      elevation: 2
      },
      cardImg: {
        width: '10%',
=======
    },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2
      },
      cardImg: {
        width: '20%',
>>>>>>> 44b7b39983044ad3b4ee2e79de0e823603330443
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
      title: {
<<<<<<< HEAD
        fontSize: 20,
        fontFamily: "BebasNeue-Regular",
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 20,
      }

    })



    const  carros = [

=======
        fontSize: 22,
        fontFamily: "BebasNeue-Regular",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
      }

    })



    const  carros = [

>>>>>>> 44b7b39983044ad3b4ee2e79de0e823603330443
      {
        id: "1" ,
        name: "Fusca",
        Ano: "1930",
        Cor: "Amarelo",
        image: FuscaIMG,
      },
      {
        id : "2",
        name: "Mustang",
        Ano: "1964",
        Cor: "Preto",
        image: MustangIMG,
      }



    ];

    return(



        <View style = {styles.container}>
<<<<<<< HEAD
          <Text style={styles.title}>Aplicacao de Carros</Text>
=======
          <Text style={styles.title}>Aplicacao inicial</Text>
>>>>>>> 44b7b39983044ad3b4ee2e79de0e823603330443
            <FlatList
          data={carros}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
          <View style = {styles.card}>
           <Image source={item.image} style={styles.cardImg}/>
           <View style={styles.info}>
              <Text style={styles.carName}>{item.name}</Text>
<<<<<<< HEAD
              <Text>Ano: {item.Ano}</Text>
              <Text>Cor: {item.Cor}</Text>
=======
              <Text style={styles.batata}>Ano: {item.Ano}</Text>
              <Text style={styles.batata}>Cor: {item.Cor}</Text>
              <Text>assdad</Text>
>>>>>>> 44b7b39983044ad3b4ee2e79de0e823603330443
           </View>
          </View>





          ) }
        />
        </View>
        

  
    )
    


  }


}

export default App;