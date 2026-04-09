import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.titulo}>DSV MOBILE</Text>
      <Text style={estilos.subtitulo}>FUNDAMENTOS II</Text>
    </View>
  );
}

function Conteudo() {
  return (
    <View style={estilos.conteudo}>
      <Text style={estilos.texto}>CONTEÚDO PRINCIPAL</Text>
    </View>
  );
}

function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodTexto}>Autor: Kawan Victor Cavalcante</Text>
      <Text style={estilos.rodTexto}>Data: 09/04/2026</Text>
    </View>
  );
}

function App() {
  return (
    <View style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#fff', padding: 10 },
  cabecalho: { backgroundColor: 'darkblue', padding: 15, alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  subtitulo: { fontSize: 14, color: 'white' },
  conteudo: { flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20 },
  texto: { fontSize: 16, color: '#333' },
  rodape: { backgroundColor: '#ddd', padding: 10, alignItems: 'center' },
  rodTexto: { fontSize: 12, color: '#444' },
});

export default App;