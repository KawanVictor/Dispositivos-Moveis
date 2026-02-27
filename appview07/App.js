import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>

      <View style={{ flex: 4, backgroundColor: '#FE0000' }} />

      <View style={{ flex: 3, backgroundColor: '#FFFFFF' }} />

      <View style={{ flex: 4, backgroundColor: '#000000' }} />

    </View>
  );
}