/*import React, { Component } from 'react';

class MyClass extends Component 
    constructor(){
        <h1>I am Constructor</h1>
    }
    render(){
        <h1>This is class component</h1>
    }
    getDerivedStatefromProps(){
        <h1>I am getMethod</h1>
    }
    ComponentDidmount(){
        <h1>I am component</h1>
    }
    ShouldComponentUpdate(){
        <h1>This is component update</h1>
    }
    getSnapShotUpdatefromState(){
        <h1>This is the update from state</h1>
    }
    componentWillUnmount(){
        <h1>This is the componentUnmount</h1>
    }
    }
  

export default A;*/


import React, { Component } from 'react';

class MyClass extends Component {
    constructor() {
        this.state = { id: 1 };
        this.state = { color:'red'};
        console.log("this is constructor");
    }

    render() {
        console.log("this is render function");
    }

}