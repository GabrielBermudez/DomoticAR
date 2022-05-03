import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useSelector } from 'react-redux';

export const AdminScreens = () => {
	const rooms = useSelector(state => state.rooms);

	const cardRooms = rooms.map((room) => {
		return (
			<View key={`room-${room.id}`} style={styles.cardRoom}>
				<Card>
					<Card.Title style={styles.cardTitle}>{room.title}</Card.Title>
					<Card.Divider/>
					<Card.Image source={require('../../assets/images/background.jpg')}>
						<Button
						icon={<Icon name='code' color='#ffffff' />}
						buttonStyle={{borderRadius: 50, marginTop: '30%', width: '30%', alignSelf:'center'}}
						title='Ir' />
					</Card.Image>
				</Card>
			</View>
		);
	})

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Habitaciones</Text>
			{cardRooms}
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex: 1,	
	},
	title:{
		fontSize: 30,
		textDecorationLine: 'underline',
		alignSelf:'center',
	},
	cardTitle: {
		fontSize: 20,
	}
})