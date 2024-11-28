import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./assets/styles/styles_aula01";

class App extends Component {
  render() {
    return(

      // Comentário fora de bloco
      /* Comentário fora do bloco */
      <View style={ styles.container }>
        
        {/* Comentário dentro do bloco */}
        <View style={ styles.header }>
          <Text style={ styles.textStyle }>Cabeçalho</Text>
        </View>
        
        <View style={ styles.main }>
          <Text style={ styles.textStyle }>Corpo</Text>
        </View>

        <View style={ styles.footer }>
          <Text style={ styles.textStyle }>Rodapé</Text>
        </View>
      </View>
    );
  }
}

export default App;