import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import LocationSelector from "../Components/LocationSelector";

export const Home = () => {
	const rooms = useSelector(state => state.rooms.rooms);

	const cardRooms = rooms.map((room) => {
		return (
			<View key={`room-${room.id}`} style={styles.cardRoom}>
				<Text >{room.title}</Text>
			</View>
		);
	})

	console.log(rooms);
	return (
		<View style={{flex: 1,}}>
			<ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
				<Text style={styles.textTitle}>Administrador de Hogar</Text>
				<View style={styles.container}>
						<LocationSelector />
				</View>
			</ImageBackground>
		</View>
		);
}

const styles = StyleSheet.create({
	container:{
		justifyContent: 'center',
		alignContent: 'center',
	},
	image: {
    	flex: 1,
	    resizeMode: 'contain',

  	},
	textTitle:{
		fontFamily: 'GrapeNuts',
		fontSize: 40,
		textDecorationLine: 'underline',
		color: 'white',
		marginBottom: 50,
	},
})
