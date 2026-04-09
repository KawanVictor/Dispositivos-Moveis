import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

function Item(props) {
  return (
    <View style={[estilos.item, { backgroundColor: props.corFundo }]}>
      <Text style={[estilos.texto, { color: props.corFonte }]}>
        {props.nomePais}
      </Text>
    </View>
  );
}

function App() {
  let ArrayPaises = ["Brasil", "China", "Japão", "Portugal", "Itália", "Alemanha",
                     "Egito", "Síria", "África do Sul", "Paquistão"];
  let ArrayCoresFundo = ["blue", "yellow", "green", "blue", "darkred", "gray", "blue", "yellow", "green", "black"];
  let ArrayCoresFonte = ["white", "black", "yellow", "black", "yellow", "green", "white", "green", "yellow", "darkred"];

  return (
    <ScrollView style={estilos.fundo}>
      {ArrayPaises.map((pais, i) => (
        <Item key={i} nomePais={pais} corFundo={ArrayCoresFundo[i]} corFonte={ArrayCoresFonte[i]} />
      ))}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: "#fff", padding: 10 },
  item: { marginVertical: 8, padding: 20, borderRadius: 6 },
  texto: { fontSize: 18, fontWeight: "bold" },
});

export default App;
