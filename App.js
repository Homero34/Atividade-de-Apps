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
      let pizzasItem = this.state.pizzas.map( (v, k) => {
        return <Picker.Item key={k} value={k} label={v.nome} />
      })

    return(
      <View style={styles.container}>
        <Text style={styles.menu}></Text>
        <Picker
        selectedValue={this.state.pizza}
        onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}>
        {pizzasItem}
        </Picker>
        <Text style={styles.pizzas}>Você escolheu o sabor:  
        {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}> Valor: R$ 
        {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>

        <Switch
        value={this.state.status}
        onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
        thumbColor="red"
        />

        <Text style={{textAlign: 'center', fontSize: 40}}>
          {(this.state.status) ? "Ativo" : "Inativo"}
        </Text>

        <Slider 
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorselecionado) => this.setState({valorslider: valorselecionado})}
        value={this.state.valorslider}
        minimumTrackTintColor="#FFFFFF" 
        maximumTrackTintColor="#000000"
        />

        <Text style={{textAlign: 'center', fontSize: 35}}>
          {this.state.valorslider.toFixed(1)}
        </Text>
      </View>     
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    menu: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
    },
    pizzas: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
    },
}); 

export default App;
