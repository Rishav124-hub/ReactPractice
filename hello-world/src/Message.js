import React, {Component} from 'react';

class Welcome extends Component{
    constructor() {
        super()
        this.state={
            message:'Welcome Visitor',
            button: 'Subscribe'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thankyou for Subscribing!',
            message1: 'Double Click on button to go on home page',
            button: 'Click'

        })
    }
    changeMessageAgain(){
        this.setState({
            message:'Welcome Visitor',
            message1: '',
            button: 'Subscribe'
        })
    }
    render(){
        return (
                <div>
                    <h1>{this.state.message}</h1>
                    <p>{this.state.message1}</p>
                    <button onClick={()=>this.changeMessage()} onDoubleClick={()=>this.changeMessageAgain()}>{this.state.button}</button>
                </div>
                )
    }
}

export default Welcome;