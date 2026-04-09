import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  const AUTOR = "Kawan Victor Cavalcante";
  const DATA = "03/2026";

  // Seções principais do clube
  let ArraySecoes = [
    'Títulos: 3 Mundiais, 3 Libertadores, 6 Brasileiros',
    'Ídolos: Rogério Ceni, Raí, Kaká, Luis Fabiano',
    'Estádio: Morumbi - inaugurado em 1960',
    'Torcida: Tricolor Paulista',
    'História: Fundado em 1930'
  ];

  // Ídolos e cargos
  let ArrayContatos = [
    { nome: 'Rogério Ceni', cargo: 'Maior ídolo / Técnico atual' },
    { nome: 'Raí', cargo: 'Ídolo / Ex-diretor de futebol' },
    { nome: 'Kaká', cargo: 'Ídolo / Melhor do Mundo 2007' },
    { nome: 'Luis Fabiano', cargo: 'Artilheiro histórico' },
    { nome: 'Telê Santana', cargo: 'Treinador histórico / anos 90' },
    { nome: 'Müller', cargo: 'Atacante / Campeão Mundial 1992' },
    { nome: 'Careca', cargo: 'Atacante / anos 80' }
  ];

  // Montagem das seções
  let secoes = [];
  for (let i = 0; i < ArraySecoes.length; i++) {
    secoes.push(
      <View key={i} style={{
        marginTop: 5,
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
      }}>
        <Text style={{ fontSize: 18 }}>{ArraySecoes[i]}</Text>
      </View>
    );
  }

  // Montagem dos contatos
  let contatos = [];
  for (let i = 0; i < ArrayContatos.length; i++) {
    contatos.push(
      <View key={i} style={{
        marginTop: 5,
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{ArrayContatos[i].nome}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{ArrayContatos[i].cargo}</Text>
      </View>
    );
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
          SÃO PAULO FC
        </Text>

        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sao_Paulo_FC_crest.svg' }}
          style={{ width: 120, height: 120 }}
        />

        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          TRICOLOR PAULISTA
        </Text>
      </View>

      {/* CORPO */}
      <ScrollView style={{ backgroundColor: 'lightgray', flex: 5 }}>
        {secoes}
        {contatos}
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
