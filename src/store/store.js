import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addressReducer from '../reducers/addressReducer';


//Root reducer that combines all the reducer in one
const rootReducer = combineReducers({
  address: addressReducer
});
//Store the global state of tha app based on the reducers
export const store = configureStore({
  reducer: rootReducer
});
