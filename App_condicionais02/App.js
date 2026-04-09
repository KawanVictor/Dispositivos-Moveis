import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

function App() {
	const img1 = 'https://i.pinimg.com/736x/86/cc/1f/86cc1fd1403c8d37c8b50cb1231c87e2.jpg';
	const img2 = 'https://i.pinimg.com/736x/5c/88/43/5c8843c22589deafef143e0a8028d1d3.jpg';
	const corFundo1 = 'rgba(0, 0, 0, 0.2)';
	const corLetra1 = 'white';
	const tamanhoLetra1 = 40;
	
	const [opcao, setOpcao] = useState(2);
	
	const sair = () => {
		Alert.alert('Sair', 'Botão SAIR pressionado');
	};
	
	const imagemAtual = opcao === 1 ? img1 : img2;
	
	return (
			<View style={{ flex: 1, backgroundColor: 'orange' }}>
			<Image
			source={imagemAtual}
			style={{
				width: '100%',
				height: '100%',
				position: 'absolute',
			}}
			resizeMode="cover"
			/>
			
			<TouchableOpacity
			onPress={() => setOpcao(1)}
			style={{
				backgroundColor: opcao === 1 ? corFundo1 : 'rgba(255, 0, 0, 0.2)',
				left: 100,
				top: 100,
				position: 'absolute',
				padding: 10,
				borderRadius: 30,
			}}
			>
			<Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
			OPÇÃO 1
			</Text>
			</TouchableOpacity>
			
			<TouchableOpacity
			onPress={() => setOpcao(2)}
			style={{
				backgroundColor: opcao === 1 ? corFundo1 : 'rgba(0, 255, 0, 0.2)',
				left: 100,
				top: 300,
				position: 'absolute',
				padding: 10,
				borderRadius: 30,
			}}
			>
			<Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
			OPÇÃO 2
			</Text>
			</TouchableOpacity>
			
			<TouchableOpacity
			onPress={sair}
			style={{
				backgroundColor: opcao === 1 ? corFundo1 : 'rgba(0, 0, 255, 0.2)',
				left: opcao === 1 ? 130 : 120,
				top: opcao === 1 ? 500 : 550,
				position: 'absolute',
				padding: 10,
				borderRadius: 30,
			}}
			>
			<Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
			SAIR
			</Text>
			</TouchableOpacity>
			</View>
			);
}

export default App;