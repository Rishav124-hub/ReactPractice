import React from 'react'

const heading={
    fontSize: "72px",
    color: "Blue"
}
function Inline() {
    return (
        <div>
            <p className="error">Error in Inline</p>
          {/* <p className={style.success}>Success</p> */}
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
