import React, { Component } from 'react';
import Graph from './Graph'
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            Ellen: 0,
            Oprah: 0,
            DrPhil: 0
        };
      }
      handleEllenClicks() {
      this.setState(prevState => ({ Ellen: prevState.Ellen +1 }))};
      handleOprahClicks() {
      this.setState(prevState => ({ Oprah: prevState.Oprah +1 }))};
      handleDrPhilClicks() {
      this.setState(prevState => ({ DrPhil: prevState.DrPhil +1 }))};
  render() {
    return (
      <div className="App">
      <Graph Ellen= {this.state.Ellen} Oprah= {this.state.Oprah} DrPhil= {this.state.DrPhil}/>

          <button onClick={this.handleEllenClicks.bind(this)} > Vote Ellen </button>
          <button onClick={this.handleOprahClicks.bind(this)} > Vote Oprah </button>
          <button onClick={this.handleDrPhilClicks.bind(this)} > Vote Dr Phil </button>
      </div>
    );
}
};
export default App;
