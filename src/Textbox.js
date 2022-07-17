import React, { Component } from 'react'

export default class Textbox extends Component {

    constructor(props){
     super(props)
     this.state= {value: " "};
     this.handleChange =this.handleChange.bind(this);
     this.handleSubmit =this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setstate({value: event.target.value});

    }
    handleSubmit(event){
        alert("You have pressed submit :"  + this.state.value);
        event.preventDefault();
    }
    
  render() {
    return (
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
     />
    )
  }
}
