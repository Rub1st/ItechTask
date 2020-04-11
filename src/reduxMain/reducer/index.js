import { 
    SET_ID_TOP_BAR,
    SET_ID_LEFT_BAR,
    SET_ID_LEFT_FIELD
} from "../constants"

const initialState = {
    idTop: 0,
    idLeftField: 0,
    idLeft: 0
};

const Reducer = (state = initialState,action) => {
    switch(action.type){
        case SET_ID_TOP_BAR:
            return Object.assign({}, state,{idTop: action.value,idLeftField: 0, idLeft: 0});
        case SET_ID_LEFT_BAR:
            return Object.assign({}, state,{idLeft: action.value});
        case SET_ID_LEFT_FIELD:
            return Object.assign({}, state,{idLeftField: action.value});
        default:
            return state;
    }
}

export default Reducer;