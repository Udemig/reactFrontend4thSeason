import { useReducer } from "react";

import React from 'react'

const initialScore = [
    {
        id: 1,
        score: 0,
        name: "memo"
    },
    {
        id: 2,
        score: 0,
        name: "Can"
    },
]

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state.map((player) => {
                if (player.id === action.id) {
                    return { ...player, score: player.score + 1 }
                } else {
                    return player
                }
            })
        default:
            return state;
    }
}


const Score = () => {

    const handleIncrease = (player) => {
        dispatch({type : "INCREASE", id: player.id })
    }

    const [score, dispatch] = useReducer(reducer, initialScore)

    return (
        <>
            {score.map((player) => {
                return (
                    <div key={player.id}>
                        <label htmlFor="">
                            <input type="button" value={player.name} onClick={()=>handleIncrease(player)} />
                            {player.score}
                        </label>
                    </div>
                )
            })}
        </>
    )
}

export default Score