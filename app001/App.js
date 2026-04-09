import React from "react";
import { View, Text } from "react-native-web";

/*
      Props de Estilo
      Autor: Kawan Cavalcante
      Data: 26/02/2026
*/

function App(){
  return (
    <View style={{ backgroundColor: 'blue' }}>

      <View style={{ backgroundColor: 'yellow', height:150 }}>
        <Text style={{ color: 'red' }}>Props de Estilo</Text>
        <Text>Autor: Kawan Cavalcante</Text>
        <Text>Data: 26/02/2026</Text>
      </View>

      <View style={{ backgroundColor: 'red', height: 75 }}>
        <Text>Props de Estilo</Text>
        <Text>Autor: Kawan Cavalcante</Text>
        <Text>Data: 26/02/2026</Text>
      </View>

    </View>
  );
}

export default App;