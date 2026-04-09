import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function Cabecalho(props) {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.titulo}>{props.titulo}</Text>
      <Text style={estilos.subtitulo}>{props.subtitulo}</Text>
    </View>
  );
}

function Conteudo(props) {
  return (
    <View style={estilos.conteudo}>
      <Text style={estilos.nome}>{props.nomePais}</Text>
      <Text style={estilos.info}>Habitantes: {props.habitantes}</Text>
      <Text style={estilos.info}>PIB: {props.pib}</Text>
    </View>
  );
}

function Rodape(props) {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodTexto}>Autor: {props.autor}</Text>
      <Text style={estilos.rodTexto}>Data: {props.data}</Text>
    </View>
  );
}

function App() {
  let paises = [
    { nomePais: "Brasil", habitantes: "213 milhões", pib: "R$ 9 tri" },
    { nomePais: "Portugal", habitantes: "10 milhões", pib: "€ 250 bi" },
    { nomePais: "Japão", habitantes: "125 milhões", pib: "US$ 4,9 tri" },
    { nomePais: "Alemanha", habitantes: "83 milhões", pib: "US$ 4,2 tri" },
    { nomePais: "EUA", habitantes: "331 milhões", pib: "US$ 25 tri" },
  ];

  return (
    <ScrollView style={estilos.fundo}>
      <Cabecalho titulo="DSV MOBILE" subtitulo="FUNDAMENTOS II" />
      {paises.map((p, i) => (
        <Conteudo key={i} nomePais={p.nomePais} habitantes={p.habitantes} pib={p.pib} />
      ))}
      <Rodape autor="Fernando Condri" data="09/04/2026" />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#fff', padding: 10 },
  cabecalho: { backgroundColor: 'darkred', padding: 15, alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  subtitulo: { fontSize: 14, color: 'white' },
  conteudo: { marginVertical: 10, backgroundColor: '#eee', padding: 10, borderRadius: 6 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  info: { fontSize: 14, color: '#333' },
  rodape: { backgroundColor: '#ddd', padding: 10, marginTop: 20, alignItems: 'center' },
  rodTexto: { fontSize: 12, color: '#444' },
});

export default App;
