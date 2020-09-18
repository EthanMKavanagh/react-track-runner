import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    recentRun: '',
    longestRun: '',
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

  onChangeRun = (event) => {
    this.setState({
      recentRun: event.target.value
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>React Track Runner</h1>
        </header>
        <body>
          <input type="number" placeholder="Miles Ran" onChange={this.onChangeRun} value={this.state.recentRun} />
          <button onClick={() => this.onAddRun(this.state.recentRun)}>Add New Run</button>
          <p>
            Recent Run: {this.state.recentRun}
          </p>
          <p>
            Longest Run: {this.state.longestRun}
          </p>
        </body>
      </div>
    );
  }
}

export default App;
