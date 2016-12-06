import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import RepoList from './components/repo_list'

const url = 'https://api.github.com/repositories?since=364&r=json'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { repositories: null };
  }

  componentDidMount(){
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
    if(this.state.repositories === null){
      return <p>loading</p>
    }
    return (
      <div>
        <RepoList repositories={this.state.repositories} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
