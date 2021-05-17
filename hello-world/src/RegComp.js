import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log("Reg Comp");
        return (
            <div>
                RegularComponent {this.props.name}
            </div>
        )
    }
}

export default RegComp
