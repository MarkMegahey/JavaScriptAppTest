//Npm Installed
import React, { Component } from 'react'
import { connect } from 'react-redux'
// Created Containers/Conponents/Reducers
import RepoListItem from './repo_list_item'

class RepoList extends Component {

  repositoryList() {
    let counter = 0
    return this.props.repositories.map((repository) => {
      counter++
      return <RepoListItem key={counter} repository={repository} />
    })
  }

  render() {
    return (
      <ul className="col-md-12 list-group">
      {repositoryList}
      </ul>
    )
  }

  mapStateToProps(state) {
  // whatever returns from here shows as props in RepoList
    return {
      repositories: state.repositories
    }
  }
}
