import React, { Component } from 'react'
// Event binding using 4 ways 
// 1.using binding property in render 
// 2. arrow function in render
// 3. binding in constructor
// 4. arrow function in class
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        // this.EventHandler=this.EventHandler.bind(this)
    }
    // EventHandler(){
    //     this.setState({
    //         message:"Good Bye!"
    //     })
    // }

    EventHandler = ()=>{
        this.setState({
            message:"Good bye!"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.EventHandler.bind(this)}>EventHandler</button> */}
                {/* <button onClick={()=>this.EventHandler()}>EventHandler</button> */}
                <button onClick={this.EventHandler}>EventHandler</button>
            </div>
        )
    }
}

export default EventBind
