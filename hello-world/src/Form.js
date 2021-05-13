import React, { Component } from 'react'



class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserName:'',
             comment:'',
             topic:'React'
        }
    }
    userNameHandler=(event)=>{
        this.setState({
            UserName:event.target.value 
        })
    }
    commentHandler=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    topicHandler=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    submit =(event)=>{
        alert(`${this.state.UserName} ${this.state.comment} ${this.state.topic}`)
        console.log(`${this.state.UserName} ${this.state.comment} ${this.state.topic}`);
        console.log(event)
        event.preventDefault()
    }
    render() {
        const {UserName,comment}=this.state
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <label>UserName : </label>
                        <input type="text" value={UserName} onChange={this.userNameHandler}/>
                    </div>
                    <div>
                        <label>Comment : </label>
                        <textarea type="text" value={comment} onChange={this.commentHandler}/>
                    </div>
                    <div>
                        <label>Topic : </label>
                        <select value={this.state.topic} onChange={this.topicHandler}>
                            <option>React</option>
                            <option>Angular</option>
                            <option>Vue</option>
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
