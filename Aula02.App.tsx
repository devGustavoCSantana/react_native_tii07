/* Comentário em Bloco */
// Comentário em linha
// Importando as dependências 
// o Próprio React e seus componentes
import React, { Component } from "react";

// SafeAreaView (seria o BODY no html)
// View (seriam as tags de blo essenciais do html: header, main, footer, div)
// Text qualquer tipo de texto, parágrafo
import { SafeAreaView, View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./assets/styles/styles_aula02";

class App extends Component{

    // Vetor que armazena a data 
    state = {
        date: "",
    }

    // Criando o método (todo método é uma função) para definir a data de hoje 
    getDate = () => {

        // constante chamada today (hoje)
        const today = new Date();

        // Formatação da data em pt-br 
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }

        // Formatando a saída 
        const formatDate = today.toLocaleDateString("pt-BR", options);

        //Atualiza o estado da saída no vetor da propriedade state
        this.setState({ date: formatDate });

        //Para forçar a atualização do componente getDate
        this.forceUpdate();
    }

    render(){
        return(
            <SafeAreaView style={ styles.container }>

                {/* Iniciando o cabeçalho*/}
               <View style={ styles.header }>
                    <Text>App Senac 02</Text>
                </View> 

                {/* Iniciando o corpo*/}
                <View style={ styles.body }>
                    <Text>Corpo</Text>

                    {/*<Button
                        title="Mostrar a data de HOJE!"
                        onPress={this.getDate}
                    />*/}
                    <TouchableOpacity
                        onPress={ this.getDate }
                        style={ styles.button }
                    >
                        <Text style={ styles.buttonText }>Mostrar a data de HOJE!</Text>
                    </TouchableOpacity>
                    
                    {
                        this.state.date ? (
                            <Text>Data: { this.state.date }</Text>
                        ) : null
                    }
                   
                </View>

                {/* Iniciando o rodapé*/}
                <View style={ styles.footer }>
                    <Text>Rodapé</Text>
                </View>
                
            </SafeAreaView>
        );
    }
}

export default App;