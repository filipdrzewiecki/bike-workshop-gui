import {combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import bicycleReducer from './bicycleReducer.jsx'
import userReducer from './userReducer.jsx'



export default combineReducers ({
      form: formReducer,
      bicycles: bicycleReducer,
      userReducer
  });