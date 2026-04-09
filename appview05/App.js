import React from "react";
import { View, Text } from "react-native-web";

/*
      DESAFIO 05
      Autor: Kawan Cavalcante
      Data: 26/02/2026
*/

function App(){
  return (
    <View style={{ backgroundColor: 'rgb(97, 73, 207)', height: '100%', width: 300 }}>

      {/* View Laranja */}
      <View style={{ backgroundColor: 'rgb(150, 56, 134)', height: '20%', width: '100%' }}>
        <Text>Props de Estilo</Text>
        <Text>Autor: Kawan Cavalcante</Text>
        <Text>Data: 26/02/2026</Text>
      </View>

      {/* View Amarela */}
      <View style={{ backgroundColor: 'rgb(24, 153, 170)', height: '70%', width: 100 }}>
        <Text style={{ color: 'red' }}>Props de Estilo</Text>
        <Text>Autor: Kawan Cavalcante</Text>
        <Text>Data: 26/02/2026</Text>
      </View>

      {/* View Vermelha */}
      <View style={{ backgroundColor: 'red', height: '10%', width: 200 }}>
        <Text>Props de Estilo</Text>
        <Text>Autor: Kawan Cavalcante</Text>
        <Text>Data: 26/02/2026</Text>
      </View>

    </View>
  );
}

export default App;