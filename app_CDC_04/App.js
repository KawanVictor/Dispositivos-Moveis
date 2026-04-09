import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.titulo}>FÓRMULA 1 NEWS</Text>
      <Text style={estilos.subtitulo}>Resultados, análises e calendário</Text>
    </View>
  );
}

function Noticia(props) {
  return (
    <View style={estilos.noticia}>
      <Text style={estilos.tituloNoticia}>{props.titulo}</Text>
      <Text style={estilos.manchete}>{props.manchete}</Text>
      <Text style={estilos.data}>{props.data}</Text>
    </View>
  );
}

function App() {
  let noticias = [
    { titulo: "Vitória de Verstappen", manchete: "Domina GP da Austrália", data: "06/04/2026" },
    { titulo: "Hamilton reage", manchete: "Conquista pódio em corrida emocionante", data: "23/03/2026" },
    { titulo: "Ferrari surpreende", manchete: "Leclerc vence em Ímola", data: "09/03/2026" },
    { titulo: "McLaren evolui", manchete: "Norris garante segundo lugar", data: "16/02/2026" },
    { titulo: "Calendário F1 2026", manchete: "Novas etapas confirmadas", data: "01/01/2026" },
  ];

  return (
    <ScrollView style={estilos.fundo}>
      <Cabecalho />
      {noticias.map((n, i) => (
        <Noticia key={i} titulo={n.titulo} manchete={n.manchete} data={n.data} />
      ))}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#fff', padding: 10 },
  cabecalho: { backgroundColor: 'red', padding: 15, alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  subtitulo: { fontSize: 14, color: 'white' },
  noticia: { marginVertical: 10, backgroundColor: '#eee', padding: 10, borderRadius: 8 },
  tituloNoticia: { fontSize: 18, fontWeight: 'bold' },
  manchete: { fontSize: 14, color: '#333' },
  data: { fontSize: 12, color: '#666' },
});

export default App;
