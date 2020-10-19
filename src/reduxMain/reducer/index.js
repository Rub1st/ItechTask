import { combineReducers } from 'redux'
import idReducer from './id'
import cosProReducer from './cospro'
import errorReducer from './error'


const Reducer = combineReducers({
  idReducer,
  cosProReducer,
  errorReducer
});

export default Reducer;
