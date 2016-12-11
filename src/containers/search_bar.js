//Npm Installed
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//Created Containers/Conponents/Reducers
import { searchRepositories } from '../actions/search_action'


class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()

    // when user submits search github data
    //`https://api.github.com/search/repositories?q=${name}&order=desc`
    this.props.searchRepositories(this.state.term)
    this.setState({ term: '' })
  }

  render()  {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for repositories"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchRepositories }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
