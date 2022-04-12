import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

export const AdminScreens = () => {
	const image = { uri: "https://media.istockphoto.com/vectors/smartphones-security-controls-vector-futuristic-smart-home-technology-vector-id1070079738?k=20&m=1070079738&s=612x612&w=0&h=dWgX33rEQ0hI65XnNLlJWurwytL9NqptOHmc5v8HcBU=" };
	return (
			<View style={styles.container}>
				<ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
					<Text style={styles.textTitle}>Administrador de Pantallas</Text>
				</ImageBackground>
			</View>
		);
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
	},
	image: {
    	flex: 1,
	    resizeMode: 'contain',
	    justifyContent: 'center',
  	},
	textTitle:{
		fontFamily: 'GrapeNuts',
		fontSize: 35,
		textDecorationLine: 'underline',
		marginBottom: '100%',
		color: 'white',
	},
})