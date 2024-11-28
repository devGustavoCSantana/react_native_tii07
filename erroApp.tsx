import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, FlatList, StatusBar } from "react-native";

// Instalar as fontes de Icones para uso
/*
    npm install react-native-vector-icons
    npx react-native link react-native-vector-icons
    import Icon from "react-native-vector-icons/MaterialIcons";
*/

import styles from "./assets/styles/styles_aula04";

// Instalar a dependencia das fontes
// expo install expo-font

// Remover em caso de erro com fontes
// npm uninstall expo-app-loading

// Crie um arquivo com o nome "react-native.config.js" na raiz do projeto
/*
    module.export = {
        assets:["assets/fonts"],
    };
*/

import * as Font from "expo-font";

// Inicio da class App
class App extends Component {

    // Construtor de classe, é um método especial utilizado para inicializar o estado do componente
    constructor(props) {

        // Chama o construtor da classe base (React.Component) para garantir que o "this" seja tratado corretamente
        super(props);

        // Inicialização do estado do componente
        this.state = {

            // "item" armazena o valor de um item no campo de texto ou formulário.
            // Inicialmente, está vazio
            item: "",
            
            // "shoppingList" é um array que contém os itens da lista de compras
            // Começa vazio
            shoppingList: [],

            // "editingIndex" indica se estamos editando um item específico da lista de compras
            // Se for "-1", significa que não estamos editando nenhum item no momento
            editingIndex: -1,

            // Variavel para fonte "fontLoaded" iniciado como falso
            fontLoaded: false
        }
    }

    /*
        O método "componentDidMount" é um método do ciclo de vida do React, executado automaticamente logo após o componente ser montado (adicionando à tela)
        Ele é comumente usado para realizar carregamentos assíncronos de recursos, como fontes, imagens ou dados de uma API, antes de renderizar o conteúdo do componente
    */
    async componentDidMount() {
        try {

            /*
                Carrega as fontes personalizadas de forma assíncrona, "Font.loadAsync()" retorna uma Promise, por isso o uso de "await" para garantir que as fontes sejam carregadas antes de continuar a execução do código.
            */
            await Font.loadAsync({
                
                /*
                    "Roboto" é o nome da fonte que será usada no aplicativo.
                    O caminho relativo para o arquivo de fonte é fornecido como valor para a chave.
                    Aqui estamos carregando a versão regular da fonte "Roboto".
                */
                "Roboto": require(".assets/fonts/Roboto/Roboto-Regular.ttf"),

                // Aqui estamos carregando a versão em negrito da fonte "Roboto" com nome "Roboto-Bold".
                "Roboto-Bold": require(".assets/fonts/Roboto/Roboto-Bold.ttf"),

                // Aqui estamos carregando a versão em negrito com itálico da fonte "Roboto" com nome "Roboto-Bold-Italic".
                "Roboto-Bold-Italic": require(".assets/fonts/Roboto/Roboto-BoldItalic.ttf"),

            });

            /*
                Após o carregamento das fontes, o estado "fontLoaded" é atualizado para "true"
                Isso pode ser usado para garantir que o conteúdo que depende das fontes carregadas seja renderizado apenas depois que as fontes estiverem disponíveis
            */
            this.setState({ fontLoaded: true });

        } catch(error) {

            /*
                Se ocorrer um erro durante o carregamento das fontes (por exemplo, se o arquivo não for encontrado), o erro é capturado aqui e pode ser tratado conforme necessário (exemplo exibir uma mensagem de erro)
            */
            console.error("Erro ao carregar fontes: ", error);

        }
    }

    // Método responsável por adicionar um item à lista de compras
    addItem = () => {

        // Desestrutura as variáveis "item" e o array "shoppingList" do estado do componente
        const { item, shoppingList } = this.state;

        // Verifica se o campo "item" não está vazio (removendo os espaços em branco no início e no final)
        if (item.trim()) {
            this.setState({
                
                // Adiciona o novo item ao final do array "shoppingList"
                shoppingList: [...shoppingList, { text: item, bought:false }],
                
                // Limpa o campo "item" após adicionar o item à lista de compras
                item: ","
            });
        }
    }

    // Método responsável por habilitar a edição de um item da lista de compras
    editItem = (index) => {

        // Desestrutura o array "shoppingList" do estado do componente
        const { shoppingList } = this.state;

        // Atualiza o estado para permitir a edição do item selecionado
        this.setState({

            // Define o valor do campo "item" com o texto do item que está sendo editado
            item: shoppingList[index].text,

            // Define o índice do item que sendo editado, pra poder identificá-lo mais tarde
            editingIndex: index
        });
    }

    // Método responsável por salvar as edições feitas em um "item" da lista de compras
    saveEdit = () => {

        // Desestrutura as variáveis "item", "editingIndex" e o array "shoppingList" do estado do componente
        const { item, shoppingList, editingIndex } = this.state;

        // Verifica se o campo "item" não está vazio (removendo espaços em branco no início e no final)
        if (item.trim()) {

            // Cria uma cópia do array "shoppingList" para garantir que o estado seja imutável
            const updatedList = [...shoppingList];

            // Atualiza o item na posição do index "editingIndex" com o novo texto
            updatedList[editingIndex].text = item;

            // Atualiza o estado com a lista de compras modificada, limpa o campo "item" e desmarca o índice de edição
            this.setState({

                // Atualiza a lista de compras com o item editado
                shoppingList: updatedList,

                // Limpa o campo de entrada "item"
                item: "",

                // Restaura o valor de "editingIndex" para "-1", indicando que não há mais item sendo editado
                editingIndex: -1
            });
        }
    }

    // Método responsável por alternar o estado de "comprado" de um item da lista de compras
    toggleBought = (index) => {

        // Desestrutura a variável "shoppingList" do estado do componente
        const { shoppingList } = this.state;

        // Cria uma cópia do array "shoppingList" para garantir que o estado seja imutável
        const updatedList = [...shoppingList];

        // Alterna o valor da propriedade "bought" do item do índice especificado
        updatedList[index].bought = !updatedList[index].bought;

        // Atualiza o estado com a lista de compras modificada
        this.setState({

            // Atualiza a lista de compras com o novo estado do item
            shoppingList: updatedList
        });
    }

    // Método responsável por renderizar o "item" da lista de compras
    renderItem = ({ item, index }) => (

        // Componente View que contém a estrutura visual do item da lista de compras
        <View style={ styles.itemContainer }>

            {/* Botão para alternar o estado "comprado" do item */}
            <TouchableOpacity
                onPress={ () => this.toggleBought(index) }
            >

                {/*
                    Icone de status de compra: "check-circle" para comprado,
                    "radio-button-unchecked" para não comprado
                */}
                <Icon

                    // Define o ícone dependendo do status do item
                    name={ item.bought ? "check-circle" : "radio-button-unchecked" }

                    // Tamanho do ícone
                    size={ 24 }

                    // Cor do ícone: "verde" - comprado | "cinza" - se não comprado
                    cor={ item.bought ? "green" : "gray" }

                    // Estilo aplicado ao ícone
                    style={ styles.checkIcon }
                />
            </TouchableOpacity>

            {/* Texto do item */}
            <Text
                    style={[ styles.itemText, item.bought && styles.strikethroung ]}
            >

                {/* Exibe o texto do item */}
                { item.text }

            </Text>

            {/* Botão para editar o item */}
            <TouchableOpacity
                onPress={ () => this.editItem(index) }
            >

                {/* Ícone de edição */}
                <Icon name="edit" size={ 24 } color="blue" />

            </TouchableOpacity>
        </View>
    );

    // Método responsável por renderizar um separador entre os itens da lista
    renderSeparator = () => {

        // Retorna uma View que serve como separador, com um estilo definido
        return <View style={ styles.separator } />;
    }

    render() {

        // Instanciando as constantes das variáveis "item", "editingIndex" e o array "shoppingList" para o start da aplicação
        const { item, shoppingList, editingIndex } = this.state;

        return(
            <SafeAreaView style={ styles.container }>

                {/* Ajustando a barra de status para não interferir no App */}
                <StatusBar barStyle="dark-content" backgroundColor="#f00" />

                {/* Cabeçalho */}
                <View style={ styles.header }>

                    <Text style={ styles.title }>App - Lista de Compras</Text>

                </View>

                {/* Corpo */}
                <View style={ styles.body }>

                    <TextInput
                        style={ styles.input }
                        placeholder="Digite o nome do item!"

                        // Valor atual do campo de entrada, vinculado ao estado "item"
                        value={ item }

                        // Atualiza o estado "item" sempre que o texto é alterado pelo usuário
                        onChangeText={ (text) => this.setState({ item: text }) }
                    />

                    <TouchableOpacity
                        style={[ styles.button,

                            /*
                                Aplica o estilo específico baseado em "editingIndex"
                                Se "editingIndex" for -1:
                                    aplica o estilo "addButton" 
                                Caso contrário:
                                    aplica o estilo "saveButton"
                            */
                            editingIndex === -1 ? styles.addButton : styles.saveButton
                        ]}

                        /*
                            Define a ação ao pressionar o botão
                            Se "editingIndex" for -1:
                                chama a função "addItem" para adicionar um novo item
                            Caso contrário:
                                chama a função "saveEdit" para salvar as edições feitas no item
                        */
                        onPress={ editingIndex === -1 ? this.addItem : this.saveEdit }
                    >

                        <Text style={ styles.buttonText }>

                            {/*
                                O texto exibido no botão depende do valor de "editingIndex"
                                Se "editingIndex" for -1:
                                    seu texto será "Adicionar"
                                Caso contrário:
                                    seu texto será "Salvar Edição"
                            */}
                            { editingIndex === -1 ? "Adicionar" : "Salvar Edição" }

                        </Text>

                    </TouchableOpacity>

                    <FlatList
                        /*
                            A propriedade "data" recebe a lista de itens que será exibida em FlatList
                            Neste caso, é a lista "shoppingList"
                        */
                        data={ shoppingList }

                        /*
                            A função "renderItem" é camada para renderizar cada item da lista
                            Ele recebe um objeto de item e deve retornar o componente que será exibido para cada item
                        */
                        renderItem={ this.renderItem }

                        /*
                            A função "keyExtractor" extrai uma chave única para cada item
                            Aqui, estamos usando o índice do item convertido para string (evita warnings ao usar índice como chave)
                        */
                        keyExtractor={ (item, index) => index.toString() }

                        /*
                            A propriedade "ItemSeparatorComponent" permite adicionar um componente visual entre os itens da lista
                            Neste caso, "renderSeparator" é uma função que retorna o separador visual (como uma linha ou um espaço)
                        */
                        ItemSeparatorComponent={ this.renderSeparator }
                        style={ styles.list }
                    />

                </View>

                {/* Rodapé */}
                <View style={ styles.footer }>

                    <Text style={ styles.footerText }>App de lista de compras - Tii07</Text>

                </View>

            </SafeAreaView>
        );
    }
}

export default App;