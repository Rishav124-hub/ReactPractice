import React from 'react'

function FragmentDemo() {
    // const name=[]
    return (
        <React.Fragment>

            {/* Like that we can use key attribute in reactfragment */}
            {/* {
                name.map(item=>(
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <h1>FragmentDemo</h1>
            <p>remove extra div tag by using fragment</p>
        </React.Fragment>
    )
}

export default FragmentDemo
