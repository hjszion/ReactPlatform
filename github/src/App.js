import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Axios from 'axios';

import Form from './components/Form';
import Score from './components/Score';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user:null,
      score:null,
      error:'The user not exit!'
    }
  }
  // https://api.github.com/users/zionhjs/repos   -> get all repos
  // https://api.github.com/users/zionhjs/followers -> get all followers

  handleSubmit = (username) => {
    const axios = require('axios').default;
    const user = username;
    const url = 'https://api.github.com/users/';
    const repo = 'repos';
    const followers = 'followers';
    const repo_url = url + user + '/' + repo;
    const followers_url = url + user + '/' + followers;
    var score = 0;
    var repo_length = 0;
    var follower_length = 0;

    const get_repo_len = () => {
      return axios({
        method:'get',
        url:repo_url,
      })
          .then(function(response){
            repo_length = Math.max(response.data.length, 1);
          })
          .catch(function(error){
              this.setState({score:null});
              alert("the user_name is invalid");
              console.log(error);
          });
    }

    const get_follower_len = () => {
      return axios({
        method:'get',
        url:followers_url,
      })
          .then(function(response){
            follower_length = Math.max(response.data.length, 1);
          })
          .catch(function(error){
              this.setState({score:null});
              alert("the user_name is invalid");
              console.log(error);
          });
    }

    Promise.all([get_repo_len(), get_follower_len()])
        .then(() => {
              score = Math.max(score, repo_length*follower_length);
              // set state
              if(score != 0){
                this.setState({score:score});
              };
            }
        )
  }

  render(){
    const axios = require('axios').default;
    return (
        <div className="App">
          <Form submit={this.handleSubmit}/>
          <br />
          <Score user={this.state.user} score={this.state.score} error={this.state.error}/>
        </div>
    );
  }
}

export default App;
