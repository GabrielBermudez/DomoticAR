import React, {useEffect, useState} from 'react';
import axios from "axios";
import {StyleSheet, View, Text, FlatList} from "react-native";
import {Button, Card, Icon} from "react-native-elements";
const ViewRoom = ({route, navigation}) => {
    const { room } = route.params;

    const [spotlights, setSpotlights] = useState(null);

    useEffect(async () => {
        const luces = await findSpotLights();
        if(luces)
            setSpotlights(luces.data.data)
    }, []);

    const findSpotLights = async() => {
        return axios.post('http://sakuradevcode.com.ar/api/spotlight/find-spotlights',
            {
                room_id: room.id
            });
    }

    const onHandlerUpdateStatusSpotligh = (lampara) => {
        try {
            axios.post('http://sakuradevcode.com.ar/api/spotlight/update-spotlight',
                {
                    id: lampara.id,
                    status: !lampara.status
                })
                .then(async(result) => {
                    console.log("onHandlerUpdateStatusSpotligh", result.data);
                    const luces = await findSpotLights()
                    if(luces)
                        setSpotlights(luces.data.data)

                }).catch(err => console.log(err));

        }catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <FlatList data={spotlights} renderItem={
                data => (
                    <View key={`room-${data.id}`} style={styles.cardSpotlight}>
                        <Card>
                            <Card.Title style={styles.cardTitle}>{data.item.name}</Card.Title>
                            <Card.Image style={styles.images} source={ (data.item.status) ? require('../../assets/images/spotlight_on.png') : require('../../assets/images/spotlight_off.png')} onPress={() => onHandlerUpdateStatusSpotligh(data.item)}/>
                        </Card>
                    </View>
                )} keyExtractor={(item) => item.id} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 30,
        textDecorationLine: 'underline',
        alignSelf:'center',
    },
    cardSpotlight:{
      width: 400,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
    },
    images: {
        width: 100,
    }
})

export default ViewRoom;
