import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

function App() {
  const img1 = 'https://i.pinimg.com/736x/86/cc/1f/86cc1fd1403c8d37c8b50cb1231c87e2.jpg';
  const img2 = 'https://i.pinimg.com/736x/5c/88/43/5c8843c22589deafef143e0a8028d1d3.jpg';
  const corFundo1 = 'rgba(0, 0, 0, 0.2)';
  const corLetra1 = 'white';
  const tamanhoLetra1 = 18;

  const [valor, setValor] = useState('');

  const doar = () => {
    if (valor === '') {
      Alert.alert('Erro', 'Digite um valor antes de doar');
    } else if (parseFloat(valor) < 5) {
      Alert.alert('Valor baixo', 'O valor mínimo é R$ 5,00');
    } else {
      Alert.alert('Obrigado!', `Doação de R$ ${valor} realizada com sucesso`);
    }
  };

  let mensagemValor = '';

  if (valor === '') {
    mensagemValor = 'Digite um valor para ajudar';
  } else if (parseFloat(valor) < 50) {
    mensagemValor = 'Toda ajuda é bem-vinda 💛';
  } else {
    mensagemValor = 'Muito obrigado pela grande contribuição! 🙌';
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f2c66d' }}>

      <View style={{
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 10
      }}>

        <View style={{
          backgroundColor: '#6c8ebf',
          borderRadius: 20,
          padding: 10,
          marginBottom: 10
        }}>
          <Text style={{ color: corLetra1 }}>🔍 Buscar cursos</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          backgroundColor: '#e6f0ff',
          borderRadius: 15,
          padding: 10,
          marginBottom: 10
        }}>
          <Image source={{ uri: img1 }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Curso de Programação</Text>
            <Text style={{ fontSize: 12, color: '#555' }}>
              JavaScript, lógica e apps mobile
            </Text>
            <Text style={{ fontSize: 10, color: '#888' }}>
              Duração: 40h
            </Text>
            <View style={{
              height: 5,
              backgroundColor: 'green',
              width: 80,
              marginTop: 5,
              borderRadius: 5
            }} />
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          backgroundColor: '#e6f0ff',
          borderRadius: 15,
          padding: 10,
          marginBottom: 10
        }}>
          <Image source={{ uri: img2 }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Design de Interfaces</Text>
            <Text style={{ fontSize: 12, color: '#555' }}>
              UI/UX moderno e responsivo
            </Text>
            <Text style={{ fontSize: 10, color: '#888' }}>
              Duração: 30h
            </Text>
            <View style={{
              height: 5,
              backgroundColor: 'green',
              width: 100,
              marginTop: 5,
              borderRadius: 5
            }} />
          </View>
        </View>

        <Image
          source={{ uri: img1 }}
          style={{
            width: '100%',
            height: 120,
            borderRadius: 20,
            marginTop: 10
          }}
        />

        <Text style={{ marginTop: 10, fontSize: 12, color: '#555' }}>
          Aprenda novas habilidades e evolua na área de tecnologia com nossos conteúdos.
        </Text>

      </View>


      <View style={{
        flex: 1,
        backgroundColor: '#00bcd4',
        margin: 10,
        borderRadius: 20,
        padding: 10
      }}>

        <Image
          source={{ uri: img2 }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 20
          }}
        />

        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 15,
          marginTop: 20
        }}>

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Apoie este Projeto
          </Text>

          <Text style={{ fontSize: 13, color: '#555', marginBottom: 10 }}>
            Sua ajuda mantém os cursos gratuitos para todos.
          </Text>

          <View style={{
            backgroundColor: '#eee',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            marginBottom: 10
          }}>
            <Text style={{ fontSize: 22, color: 'green' }}>
              R$ 120,00
            </Text>
          </View>

          <TextInput
            placeholder="Digite um valor (ex: 20)"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 10,
              padding: 10,
              marginBottom: 10
            }}
          />

          <Text style={{ fontSize: 12, color: '#555', marginBottom: 10 }}>
            {mensagemValor}
          </Text>

          <TouchableOpacity
            onPress={doar}
            style={{
              backgroundColor: valor === '' ? 'gray' : 'green',
              padding: 15,
              borderRadius: 15,
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>
              DOAR
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

export default App;