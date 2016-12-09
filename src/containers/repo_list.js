//Npm Installed
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Created Containers/Conponents/Reducers
import fetchRepositories from '../actions/fetch_action'

class RepoList extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
        RepoList
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepositories }, dispatch)
}

export default connect(null, mapDispatchToProps)(RepoList)
