import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
        let name=props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${name} size`}>StyleSheet</h1>
        </div>
    )
}

export default StyleSheet
