import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Rishav</div>

        // return this.state.isLoggedIn ? 
        //         <div>Welcome Rishav</div> :
        //         <div>Welcome Guest</div>

        // let message
        // if(this.state.isLoggedIn===true){
        //     message="Welcome Rishav"
        // }else{
        //     message="Welcome Guest"
        // }
        // return <div>{message}</div>


        // if(this.state.isLoggedIn===true){
        //     return <div>Welcome Rishav</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting
