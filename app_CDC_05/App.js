import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function Bloco(props) {
  return (
    <View style={[estilos.bloco, { backgroundColor: props.cor }]}>
      <Text style={estilos.titulo}>{props.titulo}</Text>
      <Text style={estilos.manchete}>{props.manchete}</Text>
      <Text style={estilos.data}>{props.data}</Text>
    </View>
  );
}

function App() {
  let noticias = [
    { titulo: "Clássico Paulista", manchete: "Corinthians vence Palmeiras por 2x1", data: "08/04/2026", cor: "lightblue" },
    { titulo: "Final da Copa", manchete: "Flamengo conquista título sobre o Grêmio", data: "05/04/2026", cor: "lightgreen" },
    { titulo: "Campeonato Mineiro", manchete: "Atlético bate Cruzeiro em jogo emocionante", data: "02/04/2026", cor: "lightyellow" },
    { titulo: "Internacional em alta", manchete: "Inter vence e assume liderança", data: "30/03/2026", cor: "lightcoral" },
    { titulo: "Seleção Brasileira", manchete: "Brasil anuncia amistoso contra Portugal", data: "25/03/2026", cor: "lightgray" },
  ];

  return (
    <ScrollView style={estilos.fundo}>
      <View style={estilos.banner}>
        <Text style={estilos.bannerTitulo}>NOTÍCIAS DE FUTEBOL</Text>
        <Text style={estilos.bannerSubtitulo}>Resultados, finais e amistosos</Text>
      </View>

      {noticias.map((n, i) => (
        <Bloco key={i} titulo={n.titulo} manchete={n.manchete} data={n.data} cor={n.cor} />
      ))}

      <View style={estilos.menu}>
        <Text style={estilos.menuItem}>BRASILEIRÃO</Text>
        <Text style={estilos.menuItem}>COPA DO BRASIL</Text>
        <Text style={estilos.menuItem}>SELEÇÃO</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#fff', padding: 10 },
  banner: { backgroundColor: 'darkblue', padding: 20, alignItems: 'center', marginBottom: 15 },
  bannerTitulo: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  bannerSubtitulo: { fontSize: 14, color: 'white' },
  bloco: { padding: 15, marginVertical: 8, borderRadius: 6 },
  titulo: { fontSize: 18, fontWeight: 'bold' },
  manchete: { fontSize: 14, color: '#333' },
  data: { fontSize: 12, color: '#666' },
  menu: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  menuItem: { fontSize: 14, fontWeight: 'bold', color: '#333' },
});

export default App;
