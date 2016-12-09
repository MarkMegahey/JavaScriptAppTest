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

    this.fetchData = this.fetchData.bind(this)
  }

  fetchData(event){
    this.props.fetchRepositories(this.state.term)
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
