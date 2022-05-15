import React from 'react';
import ImageSelector from '../Components/ImageSelector';
import {View, StyleSheet} from "react-native";

const AddRoom = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageSelector navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AddRoom;
