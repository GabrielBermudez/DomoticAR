import RoomsMock from '../../RoomsMock';

const initialState = {
    rooms: RoomsMock,
    selected: null
}

const RoomReducer = (state = initialState, action) => {
    return state;
}

export default RoomReducer;