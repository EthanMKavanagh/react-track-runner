import React, { Component } from 'react';
import './App.css';
import RunForm from './RunForm';

class App extends Component {

  state = {
    runs: []
  }

  onAddRun = (runParam) => {
    console.log('New run is:', runParam);
    this.setState({
      recentRun: '',
      runs: [
        ...this.state.runs,
        runParam
      ]
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>React Track Runner</h1>
        </header>

        <RunForm onAddRun={this.onAddRun}/>
      </div>
    );
  }
}

export default App;
