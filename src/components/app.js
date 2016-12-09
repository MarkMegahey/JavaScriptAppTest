//Npm Installed
import React, { Component } from 'react'
// Created Containers/Conponents/Reducers
import SearchBar from '../containers/search_bar'
import RepoList from '../containers/repo_list'

export default class App extends Component {
  render() {
    return(
      <div>
        <SearchBar />
        <RepoList />
      </div>
    )
  }
}
