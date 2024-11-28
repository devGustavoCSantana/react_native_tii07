import { StyleSheet, Dimensions } from "react-native";

/*
    Desestruturação da largura da janela (tela) do dispositivo Mobile
    A função "Dimensions.get", retorna um objeto contendo as dimensões da janela e a desestruturação extrai apenas a propriedade "width" de "window", que representa a largura da janela (tela)
*/
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },

    header: {
        width: width * 0.9,
        marginBottom: 20
    },

    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Roboto-Bold"
    },

    body: {
        width: width * 0.9,
        marginBottom: 20
    },

    input: {
        width: width * 0.9,
        height: 60,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#ccc",
        fontFamily: "Roboto-Bold-Italic"
    },

    button: {
        width: width * 0.9,
        alignItems: "center",
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5
    },

    addButton: {
        backgroundColor: "#4caf50"
    },

    saveButton:{
        backgroundColor: "#2196f3"
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto-Bold"
    },

    list: {
        width: width * 0.9,
        marginBottom: 20
    },

    // CSS referente a lista de itens
    itemContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10
    },
    
    itemText: {
        flex: 1,
        fontSize: 18,
        fontFamily: "Roboto"
    },

    checkIcon: {
        marginRight: 10
    },
    
    strikethroung: {
        color: "#888",
        textDecorationLine: "line-through"
    },

    separator: {
        height: 1,
        backgroundColor: "#4caf50"
    },

    footer: {
        width: width * 0.9,
        alignItems: "center"
    },

    footerText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto"
    }
});

export default styles;