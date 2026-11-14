import React from 'react'

const Card = ({product}) => {
    return (
        <div className='box grid grid-cols-[1fr_130px] gap-4 p-4 transition hvoer:-translate-y-1 border border-zinc-200'>
            <div className="flex flex-col gap-3">
                <div>
                    <h1 className='text-xl font-smibold'>{product.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card