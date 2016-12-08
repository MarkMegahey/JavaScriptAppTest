//Npm Installed
import { combineReducers } from 'redux'
// Created Containers/Conponents/Reducers
import RepositoriesReducer from './reducer_repositories'

const rootReducer = combineReducers({
  repositories: RepositoriesReducer
})

export default rootReducer
