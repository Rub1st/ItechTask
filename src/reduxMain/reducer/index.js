import { combineReducers } from 'redux'
import idReducer from './id'
import cosProReducer from './cospro'


const Reducer = combineReducers({
  idReducer,
  cosProReducer
});

export default Reducer;
