import React, { Component } from 'react'

export default class  extends Component {
    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
    }
    increment = ()=>{
        // this.setState({
        //     count: this.state.count +1
        // },
        // ()=>{
        //     console.log(this.state.count);
        // })
        // console.log(this.state.count);
        this.setState((prevState, props) =>({
            count: prevState.count +1
        }))
        console.log(this.state.count);
    }
    incrementFiveTimes = ()=>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
          <h1>Count : {this.state.count}</h1>
          {/* <button onClick = {this.increment}>+1</button> */}
          <button onClick = {this.incrementFiveTimes}>+1</button>
      </div>
    )
  }
}
