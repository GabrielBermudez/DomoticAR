import * as FileSystem from 'expo-file-system';
import {insertRooms} from "../../db";
import * as Location from "expo-location";

export const ADD_IMAGE = 'ADD_IMAGE';

export const addImage = (title, image, geoLocation) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: path
            });

            const result = await insertRooms(title, path, geoLocation.lat, geoLocation.lng);

            dispatch({type: ADD_IMAGE, payload: {title, image: path}})
        } catch (err) {
            console.log(err.message);
            throw err;
        }

    }
}
