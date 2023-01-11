import React, { Component } from 'react'


export default class Forms extends Component {
    constructor(){
        super();
        this.state ={
            currText:'',
            finalText:''
        };
    }
    handleChange = (e)=>{
        console.log(e.target.value);
      
        this.setState({
            currText:e.target.value
        })
      
    }
    SubmitHandle = ()=>{
        this.setState({
            finalText:this.state.currText,
            currText:''
        })
    }
  render() {
    // console.log(this.state.currText);
    return (
      <div className='Container'>
        <h1>Hello {this.state.finalText}</h1>
        <input type="text" className='inputform' value={this.state.currText} onChange={this.handleChange}/>
        <input type="submit" className='btn' onClick={this.SubmitHandle}/>
      </div>
    );
  }
}
