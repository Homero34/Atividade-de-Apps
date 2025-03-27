import React, { Component } from "react";
import { View, Text, StyleSheet, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorslider: 70,
          status: false,
         pizza: 0,
         pizzas: [
            {key: 1, nome: 'Calabresa', valor: 50.00},
            {key: 1, nome: 'Peperoni', valor: 100.00},
            {key: 1, nome: 'Cachorro-Quente', valor: 150.00},
            {key: 1, nome: 'Peito de Peru', valor: 120},
            {key: 1, nome: 'Portuguesa', valor: 130.00},
            {key: 1, nome: 'Frango', valor: 100.},
         ]
         
        };
    };

  render() {

    const styles = StyleSheet.create({

      container: {
        flex: 1 ,
        fontSize: 20 ,
        color: "#000000"
        
      },
      card: {

      position: "static",
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 16,
      shadowColor: 'rgba(0, 0, 0, 1.5)',
      shadowOffset: {
      width: 0,
      height: 1,
    },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2
      },
      cardImg: {
        width: '20%',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
      title: {
        fontSize: 22,
        fontFamily: "BebasNeue-Regular",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
      }

    })



    const  carros = [

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
          <Text style={styles.title}>Aplicacao inicial</Text>
            <FlatList
          data={carros}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
          <View style = {styles.card}>
           <Image source={item.image} style={styles.cardImg}/>
           <View style={styles.info}>
              <Text style={styles.carName}>{item.name}</Text>
              <Text style={styles.batata}>Ano: {item.Ano}</Text>
              <Text style={styles.batata}>Cor: {item.Cor}</Text>
              <Text>assdad</Text>
           </View>
          </View>





          ) }
        />
        </View>
        

  
    )
    


  }


}

export default App;
