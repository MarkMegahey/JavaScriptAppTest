//Npm Installed
import { combineReducers } from 'redux'
// Created Containers/Conponents/Reducers
import PublicRepoReducer from './reducer_publicrepo'

const rootReducer = combineReducers({
  publicrepo: PublicRepoReducer
});

export default rootReducer;
