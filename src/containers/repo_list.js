//Npm Installed
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Created Containers/Conponents/Reducers
import { fetchRepositories } from '../actions/fetch_action'
import RepoListItem from '../components/repo_list_item'

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



  render() {
    return (
      <div>
        <ul className="list-group">
        {this.props.publicrepo.map((repository) => {
          return (
            <RepoListItem repository={repository} />
          )
        })}
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
