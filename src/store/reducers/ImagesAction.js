import * as FileSystem from 'expo-file-system';

export const ADD_IMAGE = 'ADD_IMAGE';

export const addImage = (title, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: path
            });

        } catch (err) {
            console.log(err.message);
            throw err;
        }
        dispatch({type: ADD_IMAGE, payload: {title, image: path}})
    }
}
