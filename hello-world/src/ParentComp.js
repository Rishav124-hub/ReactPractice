import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"rishav"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                message:'rish'
            })
        },2000)
    }
    
    render() {
        console.log("*****************Parent Comp*******************");
        return (
            
            <div>
                Parent Component
                <PureComp name={this.state.message}></PureComp>
                <RegComp name={this.state.message}></RegComp>
            </div>
        )
    }
}

export default ParentComp
