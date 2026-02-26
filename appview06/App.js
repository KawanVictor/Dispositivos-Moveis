import React from "react";
import { View } from "react-native";

/*
    DESAFIO 06
    Projeto: app002_View_06
*/

export default function App() {
  return (
    <View style={{ flex: 1 }}>

      {/* View Vermelha */}
      <View style={{ flex: 1, backgroundColor: 'red' }} />

      {/* View Laranja */}
      <View style={{ flex: 2, backgroundColor: 'orange' }} />

      {/* View Verde */}
      <View style={{ flex: 3, backgroundColor: 'green' }} />

    </View>
  );
}



expo init appview05