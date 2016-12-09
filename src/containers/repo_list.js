//Npm Installed
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Created Containers/Conponents/Reducers
import { fetchRepositories } from '../actions/fetch_action'

class RepoList extends Component {
  constructor(props) {
    super(props)

    this.state = { term: null }

    this.fetchData = this.fetchData.bind(this)

    this.fetchData()
  }

  fetchData(event){
    this.props.fetchRepositories(this.state.term)
  }

  renderRepo(repoData) {
    return(
        <li
          key={repoData.name}
          className="list-group-item">
          {repoData.name}
        </li>
    )
  }

  render() {
    if(this.state.term === null){
      return <p>loading</p>
    }

    return (
      <div>
        <ul className="list-group">
          {this.props.publicrepo.map(this.renderRepo)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ publicrepo }) {
  return { publicrepo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepositories }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RepoList)
