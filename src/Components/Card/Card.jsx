

import React from 'react'

const Card = ({buttonWork, credit, remaning, totalPrice}) => {
    return (
        <div>
            <div className='backdrop-blur-sms rounded-lg text-left space-y-4  bg-white/100 w-72 p-3'>
                <h1 className='text-lg px-2 bg-cyan-600 text-white rounded font-bold'>Credit Hour Remaining : {remaning}</h1>
                <hr />
                <h2 className='text-lg font-extrabold'>Course Name</h2>
                {
                    buttonWork.map((name, count) => <p>{count + 1}. {name.title}</p>)
                }
                <hr />
                <p className='text-lg font-semibold'>Total Credit Hour :{credit} </p>
                <hr />
                <p className='text-lg font-bold'>Total Price : {totalPrice} USD</p>
            </div>
        </div>
    )
}

export default Card 