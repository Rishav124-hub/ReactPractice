import React from 'react'
import Name from './Name'

function NameList() {
    const names=[
        {
            id:1,
            name:"Bruce",
            age:20,
            skill:"React"
        },
        {
            id:2,
            name:"Clark",
            age:23,
            skill:"Angular"
        },
        {
            id:3,
            name:"Diana",
            age:25,
            skill:"Vue"
        }
    ]
    const nameList=names.map((n)=> <Name key={n.id} nNames={n}></Name>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList
