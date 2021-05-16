import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Rishav'
        }
        console.log('1.0.LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log("2.1.LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log('4.0.LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('0.2.LifeCycleA ShouldComponentUdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("0.4LifeCycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps,prevState){
        console.log("0.5LifeCycleA componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            message:'Hii Rishav'
        })
    }
    
    render() {
        console.log('3.3.LifeCycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
