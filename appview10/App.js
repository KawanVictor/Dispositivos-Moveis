import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View 
      style={{ 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        backgroundColor: 'white'
      }}
    >

      <View style={{ width: 60, height: 60, backgroundColor: '#FFFF' }} />

      <View style={{ width: 60, height: 60, backgroundColor: '#1fb8a3' }} />

      <View style={{ width: 60, height: 60, backgroundColor: '#0eb640' }} />

    </View>
  );
}