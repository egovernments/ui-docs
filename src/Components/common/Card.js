import React from 'react'

const Card = (props) => {
    return (
        <div className="custom-shadow bg-white">
            {props.children}
        </div>
    )
}

export default Card
