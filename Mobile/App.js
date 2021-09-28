import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {api} from './services/api';
import Filmes from './Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
   async function loadFilmes() {
      const response = await api.get('/filmes');
      setFilmes(response.data);
      setLoading(false)
   }

   loadFilmes();

  }, [])

  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color="#121212" size={45}/>
        <Text>Carregado filmes...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        
        <FlatList
        showsVerticalScrollIndicator={false}
        data={filmes}
        keyExtractor={ item => String(item.id) }
        renderItem={ ({ item }) => <Filmes data={item} /> }
        />

      </View>
     );
   }
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#B11C1C',
  }
});
