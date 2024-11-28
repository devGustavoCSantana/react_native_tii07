import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#f00"
    },

    header: {
      padding: 20,
      paddingTop: 60,
      alignItems: "center",
      backgroundColor: "#4caf50"
    },

    main: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff"
    },

    footer: {
      padding: 20,
      alignItems: "center",
      backgroundColor: "#4caf50"
    },

    textStyle: {
      color: "#F00",
      fontSize: 16,
      fontWeight: "bold"
    }
});

export default styles;