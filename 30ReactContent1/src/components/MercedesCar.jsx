import React from 'react'
import styled from "styled-components";

const MyHeader = styled.h3`
padding: 10px 20px;
background-color: #55ff00;
color: red
`

const MercedesCar = (props) => {
    return (
        <>
            {props.brand && <h1>My car is {props.brand}</h1>}
            <MyHeader>Welcomee</MyHeader>
        </>
    )
}

export default MercedesCar