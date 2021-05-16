import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Rishav'
        }
        console.log('1.0.LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log("2.1.LifeCycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log('4.0.LifeCycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('0.2.LifeCycleB ShouldComponentUdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("0.4LifeCycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps,prevState){
        console.log("0.5LifeCycleB componentDidUpdate")
    }
    render() {
        console.log('3.LifeCycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
