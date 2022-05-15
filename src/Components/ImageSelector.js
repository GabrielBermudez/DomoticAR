import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button, Image, Alert} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {useDispatch} from "react-redux";
import {addImage} from "../store/reducers/ImagesAction";

const ImageSelector = ({navigation}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [pathImage, setPathImage] = useState('');

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted'){
            Alert.alert('Permisos insuficientes', 'Necesita dar permisos de la cámara para usar la aplicación',
                [{text: 'Ok'}],
                );
            return false;
        }
        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();

        if(!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8,
        })

        setPathImage(image.uri);
    }

    const onHandlerChangeTitle = (value) => setTitle(value);
    const onHandlerSave = () => {
        dispatch(addImage(title, pathImage));
        navigation.navigate('Home');
    }
    return (
        <View>
            <View>
                <Text>Titulo</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onHandlerChangeTitle}
                    value={title}
                />
                <View style={styles.imageContainer}>
                {!pathImage ? (<Text>No hay imagen seleccionada...</Text> ):
                        (<Image source={{uri: pathImage}} style={styles.image}/>)
                }
                </View>
                <View style={styles.buttonContainer}>
                <Button title="Tomar Foto" color="pink" onPress={handlerTakeImage} />
                </View>
                <Button title="Guardar" onPress={onHandlerSave}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        width: 300,
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    imageContainer:{
        marginBottom: 30,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1
    },
    image:{
        width: '100%',
        height: '100%'
    },
    buttonContainer:{
        marginBottom: 15,
    }
})

export default ImageSelector;
