import { ADD_IMAGE } from './ImagesAction';

const initialState = {
    images: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            const image = {
                date: Date.now(),
                title: action.payload.title,
                image: action.payload.image,
            };
            return {
                ...state,
                images: state.images.concat(image)
            }
        default:
            return state
    }
}
