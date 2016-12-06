import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import RepoList from './components/repo_list'

const url = 'https://api.github.com/repositories?since=364&r=json'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { repositories: [] };
  }

  componentWillMount(){
   Axios.get(url)
    .then((response) => {
      console.log(response.data);
    })
    .then((response) => {
      this.setState({
        repositories: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    if(this.state === null || this.state.repositories.length === 0){
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
