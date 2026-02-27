import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>

      <View style={{ flex: 2, backgroundColor: 'red' }} />

      <View style={{ flex: 4, backgroundColor: 'darkorange' }} />

      <View style={{ flex: 5, backgroundColor: 'green' }} />

    </View>
  );
}