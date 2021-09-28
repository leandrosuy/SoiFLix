import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Detalhes from '../Detalhes';

export default function Filmes({ data }){

  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View style={styles.card}>
      <Text style={styles.titulo}>{data.nome}</Text>
      <Image 
        style={styles.capa}
        source={{uri: data.capa}}
      />

      <View style={styles.areaBotao}>
        <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
          <Text style={styles.botaoTexto}>LEIA MAIS</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes 
          filme={data} voltar={() => setVisibleModal(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 5,
    borderRadius: 6,
  },
  capa: {
    height: 250,
    zIndex: 2,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  titulo: {
    padding: 15,
    fontSize:18,
    fontWeight:'700'
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9
  },
  botao: {
    width: 100,
    backgroundColor: '#E50914',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 1
  },
})