//Npm Installed
import { combineReducers } from 'redux'
// Created Containers/Conponents/Reducers
import SearchRepoReducer from './reducer_searchrepo'

const rootReducer = combineReducers({
  searchrepo: SearchRepoReducer
});

export default rootReducer;
