import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {

  let elemento = [];
  let i = 0;

  const AUTOR = "Kawan Victor Cavalcante";
  const DATA = "03/2026";

  let ArrayNomes = [
    'Rogério Ceni',
    'Raí',
    'Kaká',
    'Luis Fabiano',
    'Careca',
    'Müller',
    'Telê Santana'
  ];

  while (i < ArrayNomes.length) {
    elemento.push(
      <View key={i} style={{
        marginTop: 5,
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingLeft: 10,
        borderLeftWidth: 5,
        borderLeftColor: 'red'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          Nome: {ArrayNomes[i]}
        </Text>
      </View>
    );
    i++;
  }

  return (
    <View style={{ backgroundColor: 'black', flex: 1, padding: 10 }}>

      {/* CABEÇALHO */}
      <View style={{
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: 'darkred',
        flex: 2,
        justifyContent: "center",
        alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
          LAÇOS DE REPETIÇÃO
        </Text>

        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sao_Paulo_FC_crest.svg' }}
          style={{ width: 150, height: 100 }}
        />

        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          SÃO PAULO FC
        </Text>
      </View>

      {/* CORPO */}
      <ScrollView style={{
        backgroundColor: 'lightgray',
        flex: 5,
      }}>
        {elemento}
      </ScrollView>

      {/* RODAPÉ */}
      <View style={{
        backgroundColor: 'darkred',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 20, color: 'white' }}>
          {AUTOR}
        </Text>

        <Text style={{ fontSize: 20, color: 'white' }}>
          {DATA}
        </Text>
      </View>

    </View>
  );
}

export default App;