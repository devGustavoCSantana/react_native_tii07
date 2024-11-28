import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },

    title: {
        fontSize: 24,
        fontWeight: "bold"
    },

    button: {
        margin: 20,
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#007bff"
    },

    buttonText: {
        color: "#fff",
        fontSize: 20
    },
    
    text: {
        fontSize: 18,
        textAlign: "center"
    }
});

export default styles;