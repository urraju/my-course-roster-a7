

import React from 'react'

const Card = ({buttonWork}) => {
    return (
        <div>
            <div className='backdrop-blur-sms rounded-lg text-left space-y-4  bg-white/100 w-72 p-3'>
                <h1 className='text-lg px-2 bg-cyan-600 text-white rounded font-bold'>Credit Hour Remaining :</h1>
                <hr />
                <h2 className='text-lg font-extrabold'>Course Name</h2>
                <hr />
                <p className='text-lg font-semibold'>Total Credit Hour : </p>
                <hr />
                <p className='text-lg font-bold'>Total Price : </p>
            </div>
        </div>
    )
}

export default Card 