import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import RepoList from './components/repo_list'

const url = 'https://api.github.com/repositories?since=364'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { repositories: null };


    Axios.get(url)
    .then((repositories) => {
      console.log(repositories.data);
    })
    .then((repositories) => {
      this.setState({repositories});
    })
    .catch((error) => {
      console.log(error);
    });
  }



  render() {
    if(this.state === null || this.state.list.length === 0){
      return null
    }
    return (
      <div>
        <RepoList repositories={this.state.repositories} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
