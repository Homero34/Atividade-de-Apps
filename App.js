import React, { Component } from "react";
import { View, Text, Image, } from 'react-native';

class App extends Component {

  render() {


    const  Fusca = () => {

   
      return (

        <View style = {{
          padding: 90 , 
          margin: 90,
          backgroundColor: "lightblue",
          borderRadius: 20,
          borderStyle: "solid"}}>

          <Image
          
          source = {{uri: 'https://images.pexels.com/photos/11883040/pexels-photo-11883040.jpeg?auto=compress&cs=tinysrgb&w=600'}}
          style = {{width:300 , height:300, borderRadius: 8}}          
          />

          <Text style = {{color:'#000000'}}>VW - Fusca</Text>
          <Text style = {{color:'#000000'}}>Ano - 1978</Text>
          <Text style = {{color:'#000000'}}>Cor - Preto</Text>

          
        </View>
    
      )
    }
 
    const Gol = () => {

      return(

        <View
        style = {{
          padding: 90 , 
          margin: 90,
          backgroundColor: "lightblue",
          borderRadius: 20,
          borderStyle: "solid"}}> 

          <Image
          
          source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Volkswagen_Gol_Highline_2023_%2853708009248%29_%28cropped%29.jpg/1200px-Volkswagen_Gol_Highline_2023_%2853708009248%29_%28cropped%29.jpg'}}
          style = {{width:300 , height:300, borderRadius: 8}}          
          />

        <Text style = {{color:'#000000', backgroundColor:'#87CEFA', borderRadius: 20}}>VW - Gol</Text>
        <Text style = {{color:'#000000', backgroundColor:'#87CEFA', borderRadius: 50}}>Ano - 2010</Text>
        <Text style = {{color:'#000000', backgroundColor:'#87CEFA', borderRadius: 50}}>Cor - Cinza</Text>
        
        </View>

          



      )
      
    }


    return(



        <View style>



          <Text style={{color:'#000000', fontSize:65,margin:50,fontWeight:"normal"}}
          >Aplicacao inicial</Text>
        
        <Fusca/>
        <Gol/>

        </View>
        

  
    )


  }


}

export default App;