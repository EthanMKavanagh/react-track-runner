import React, { Component } from 'react';

class RunForm extends Component {

    state = {
        recentRun: ''
    }

    onChangeRun = (event) => {
        this.setState({
          recentRun: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="number" placeholder="Miles Ran" onChange={this.onChangeRun} value={this.state.recentRun} />
                <button onClick={() => this.state.onAddRun(this.state.recentRun)}>Add New Run</button>

                <p>Recent Run: {this.state.recentRun}</p>
                <p>Longest Run: {this.state.longestRun}</p>
            </div>
        );
    }
}

export default RunForm;