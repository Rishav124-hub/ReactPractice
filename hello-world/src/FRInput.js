import React from 'react'

// function FRInput(props,ref) {
//     return (
//         <div>
//             <input type="text" ref={ref}></input>
//         </div>
//     )
// }

// const FRInput=(props ,ref)=>{
//     return(
//         <div>
//             <input type="text" ref={ref}></input>
//         </div>
//     )
// }

// export default React.forwardRef(FRInput)

const FRInput=React.forwardRef((props ,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})

export default FRInput
