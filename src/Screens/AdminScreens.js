import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import { useSelector } from 'react-redux';

export const AdminScreens = () => {
	const rooms = useSelector(state => state.rooms.rooms);
	const images = useSelector(state => state.images.images);

	const cardRooms = images.map((image, key) => {
		return (
			<View key={`room-${key}`} style={styles.cardRoom}>
				<Card>
					<Card.Title style={styles.cardTitle}>{image.title}</Card.Title>
					<Card.Divider/>
					<Card.Image source={{uri: image.image}}>
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
		<ScrollView style={styles.container}>
			{cardRooms}
		</ScrollView>
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
