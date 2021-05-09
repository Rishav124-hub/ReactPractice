import React from 'react';

// function Greet(){
//     return <h1>Hello World</h1>
// }
// const Greet= ()=> <h1>Hello</h1>


// Using With JSX
export const Greet = (props)=>{
    console.log(props)
    const {name}=props
    return (
        <div>
            <h3>Hello {name} {props.lastName}</h3>
            {props.children}
        </div>
    )
}
export const Greet1 = ()=>
    <div>
        <h1>How Are You ?</h1>
        <h2>I am Fine</h2>
    </div>

// export default Greet;