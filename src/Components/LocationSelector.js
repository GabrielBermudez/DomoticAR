import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert, Dimensions, StyleSheet} from "react-native";
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';

const LocationSelector = () => {
    const [pickedLocation, setPickedLocation] = useState(null);

    useEffect(() => {
            handleGetLocation();
        }
    ,[])

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
    }

    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de la localizacion para usar la aplicación',
                [{text: 'Ok'}]
            )

            return false;
        }

        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {pickedLocation
                    ? <MapView initialRegion={{
                        latitude: pickedLocation.lat,
                        longitude: pickedLocation.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }} style={{width: 300, height: 250}} >
                        <Marker title="Su ubicación actual" coordinate={{latitude: pickedLocation.lat, longitude: pickedLocation.lng}} />
                    </MapView>
                    : <Text style={{backgroundColor: 'red'}}>Esperando ubicacion...</Text>
                }

            </View>
            <Button title="Obtener Localización"
                    color="pink"
                    onPress={handleGetLocation}
            />
        </View>
    );
};

//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224, -73.961452&key=AIzaSyCon4XYLQSHArJM9P8jjmwLDHM_Iddma1Q

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    preview: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'whitesmoke',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default LocationSelector;
