import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [cliques, setCliques] = useState(0);

  const Clique = () => {
      setCliques(cliques + 1);
  };

  const RemoverClique = () => {
      setCliques(cliques - 1);
  }

  return (
      <View style={styles.container}>
        <Text style={styles.text}>SENAI!</Text>

        <Image source={require('./assets/img.png')} style={{ width: 200, height: 200 }} />

        <StatusBar style="light" backgroundColor={"black"} translucent={false} />
        <Button title={"Adicionar!"} onPress={Clique}></Button>
        <Button title={"Remover!"} onPress={RemoverClique}></Button>
          

        <Text style={styles.textCont}>{`Você clicou ${cliques + 1} vezes!`}</Text>


      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4359e2',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15
  },
  text: {
    fontSize: 80,
    color: 'yellow',
    fontWeight: 'bold',
  },
  textCont:{
      fontSize:25,
      color: 'yellow',
      fontWeight: 'bold'
  }
});
