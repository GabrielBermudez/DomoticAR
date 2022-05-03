import {createStore, combineReducers} from 'redux';
import RoomReducer from './reducers/RoomReducer';

const RootReducer = combineReducers({
    rooms: RoomReducer
});

export default createStore(RoomReducer);