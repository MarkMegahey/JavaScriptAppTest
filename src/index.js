//Npm Installed
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Created Containers/Conponents/Reducers
import SearchBar from './components/search_bar'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repositories: null
    }
  }



  // onInputChange(term) {
  //     this.setState({term})
  //     this.props.onSearchTermChange(term)
  // }


  render() {
    if(this.state.repositories === null){
      return <p>loading</p>
    }

    return (
      // <div className="modal-content">
      //   <div className="modal-header">
      //     <h4 className="modal-title">Public Git Repositories</h4>
      //   </div>
      //   <div className="modal-body">
          <div>
            <SearchBar />
            <RepoList repositories={this.state.repositories} />
          </div>
      //   </div>
      // </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))
