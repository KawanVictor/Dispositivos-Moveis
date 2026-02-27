import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>

      <View style={{ flex: 3, backgroundColor: '#1eb318' }} />

      <View style={{ flex: 4, backgroundColor: '#0000' }} />

      <View style={{ flex: 3, backgroundColor: '#1eb318' }} />

    </View>
  );
}