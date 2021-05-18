import React from 'react'

function Name({nNames}) {
    return (
        <div>
         <p>I am {nNames.name}. I am {nNames.age} years old. I know {nNames.skill}</p>
        </div>
    )
}

export default Name
