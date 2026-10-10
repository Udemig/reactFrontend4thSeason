import React from 'react'
import App from '../App.jsx'

const Car = (props) => {
    console.log(props)
    const {brand, color ,isGoal} = props

    if (isGoal) {
        return <h2>Hello I"m satrun</h2>
    }
    return (
        <div className='class2'>my Car brand is {brand}  and
            color is {props.color}
        </div>
    )
}

export default Car