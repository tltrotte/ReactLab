import React, { Component } from 'react';
import GraphBar from './GraphBar'

class Graph extends Component {


  render(){

    return(
      <div className = "Graph">
        <GraphBar label={"Ellen"} value = {this.props.Ellen}/>
        <GraphBar label={"Oprah"} value = {this.props.Oprah}/>
        <GraphBar label={"DrPhil"} value = {this.props.DrPhil}/>
      </div>
    )

  }
}
export default Graph;
