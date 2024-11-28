// components/Botao.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CampoLogin {
  title: string;
  onPress: () => VideoEncoderEventMap;
}

const Botao: React.FC<CampoLogin> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.CampoLogin} onPress={onPress}>
      <Text style={styles.CampoLogin}>{title}</Text>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
    CampoLogin: {
    backgroundColor: 'black', // Cor de fundo do botão
    paddingVertical: 10,
    height: 50,
    width: 180,
    marginTop:10,
    marginLeft: 60,
    borderWidth:2,
    borderColor:'#5BC2E7',
    paddingHorizontal: 20, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  TextCampoLogin: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold', 
  },
});

export default CampoLogin;
