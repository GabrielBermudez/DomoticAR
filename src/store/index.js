import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import RoomReducer from './reducers/RoomReducer';
import ImagesReducer from "./reducers/ImagesReducer";

const RootReducer = combineReducers({
    rooms: RoomReducer,
    images: ImagesReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))
