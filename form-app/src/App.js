import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Project from './components/Project';

class App extends React.Component{
    constructor() {
      super();
      this.state = {projects:[{}]}
    }
    handleSubmit = (selection, description, minutes) => {
        console.log("selection:", selection, "des:", description, "minutes:", minutes);
        this.setState({projects:this.state.projects.concat([{selection:selection, description:description, minutes:minutes}])});
    }

    render() {
      const projects = this.state.projects;
      const all = projects.map((project, idx) => {
          return <Project value={idx} proj={project.selection} des={project.description} minutes={project.minutes} />
      });
      return (
          <div className="App">
            <h1>Validated Form</h1>
            <br />
            <Form handleSubmit={this.handleSubmit}/>
            <br />
            {all}
            <br />
          </div>
      );
    }
}

export default App;
