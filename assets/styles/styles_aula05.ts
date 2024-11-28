import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    logoTopo: {
        width: "65%",
        height: 80,
        resizeMode: "contain",
        position: "absolute",
        left: -80, 
        top: 40, 
    },

    banner:{
        height:'100%',
        width:'100%'
    },
    caixa:{
      marginTop:280,
      width: 300,
      height: 350,
      borderRadius: 20,
      marginLeft:60,
      backgroundColor:'#11111E',
    },
    textoMeio:{
        color: 'white',
        alignItems: 'center',
        padding:10,
        fontSize: 30,
    },
    textoBaixoMeio:{
        color: 'white',
        alignItems: 'center',
        padding:10,
        fontSize: 28,
    },
    textoMeioTelaLogin:{
        marginLeft:100,
        top:15,
        color: 'white',
        alignItems: 'center',
        padding:10,
        fontSize: 25,
    },
    textoBaixoMeioLogin:{
        color: 'white',
        alignItems: 'center',
        padding:10,
        fontSize: 15,
    },
    inputLogin:{
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'#5BC2E7',
        borderRadius: 10, 
        width: 220,
        height: 35,
        marginLeft:40,
    },
    inputLoginBaixo:{
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'#5BC2E7',
        borderRadius: 10, 
        width: 220,
        height: 35,
        marginLeft:40,
    },
    caixaRecuperar:{
        marginTop:280,
      width: 300,
      height: 380,
      borderRadius: 20,
      marginLeft:60,
      backgroundColor:'#11111E',
    },
    textoMeioTelaRecuperarSenha:{
        color: 'white',
        alignItems: 'center',
        padding:10,
        top: 10,
        marginLeft:40,
        fontSize: 25,
    },
    inputRecuperarBaixo:{
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'#5BC2E7',
        borderRadius: 10, 
        width: 220,
        height: 35,
        marginLeft:40,
        
    },
   
});

export default styles;

