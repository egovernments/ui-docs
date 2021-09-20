import React from 'react'

const Container = (props) => {
    return (
        <div className="container xl:px-16 px-4 mx-auto">
            {props.children}
        </div>
    )
}

export default Container
