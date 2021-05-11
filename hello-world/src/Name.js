import React from 'react'

function Name({names}) {
    return (
        <div>
         <p>I am {names.name}. I am {names.age} years old. I know {names.skill}</p>
        </div>
    )
}

export default Name
