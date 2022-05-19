import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import { useSelector } from 'react-redux';
import {findAllRooms} from "../db";

export const AdminScreens = ({navigation}) => {
	const images = useSelector(state => state.images.images);
	const [rooms, setRooms] = useState()

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', async () => {
			const data = await findAllRooms();
			setRooms(data.rows._array);
			console.log({rooms});
		})
		return unsubscribe;
	},[])



	const cardRooms = () => {
		if(rooms) {
			const roomsMap = rooms.map((room, key) => {
				return (
					<View key={`room-${key}`} style={styles.cardRoom}>
						<Card>
							<Card.Title style={styles.cardTitle}>{room.name}</Card.Title>
							<Card.Divider/>
							<Card.Image source={{uri: room.image}}>
								<Button
									icon={<Icon name='code' color='#ffffff'/>}
									buttonStyle={{
										borderRadius: 50,
										marginTop: '30%',
										width: '30%',
										alignSelf: 'center'
									}}
									title='Ir'/>
							</Card.Image>
						</Card>
					</View>
				);
			})
			return roomsMap;
		}else {
			return <View></View>;
		}
	}

	return (
		<ScrollView style={styles.container}>
			{images && cardRooms()}
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
