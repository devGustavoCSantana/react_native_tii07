// HomeScreen.tsx
import React from 'react';
import { SafeAreaView, View, StatusBar, ScrollView, Text, Image, ImageBackground } from "react-native";
import styles from "../assets/styles/styles_aula05";
import Botao from "../assets/components/Botao";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ImageBackground style={styles.banner} source={require("../assets/images/Rectangle.png")}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/LogoTopo.png")}
            style={styles.logoTopo}
          />
        </View>
        <View style={styles.caixaRecuperar}>
          <Text style={styles.textoMeioTelaRecuperarSenha}>
            Recuperar Senha
          </Text>
          <Text style={styles.textoBaixoMeioLogin}>
            Email
          </Text>
          <View>
            <TextInput style={ styles.inputLogin }></TextInput>
          </View>
          <View>
             
          <Text style={styles.textoBaixoMeioLogin}>
            Senha
          </Text>
            <TextInput style={ styles.inputLoginBaixo }></TextInput>
            <Text style={styles.textoBaixoMeioLogin}>
            Confirmar Senha
          </Text>
            <TextInput style={ styles.inputRecuperarBaixo }></TextInput>
           
          </View>
          <Botao
            title="Entrar"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
