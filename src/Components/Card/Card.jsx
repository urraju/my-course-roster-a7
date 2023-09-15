
import React from 'react'

const Card = ({buttonWork, credit, remaning, totalPrice}) => {
    return (
        <div>
            <div className='backdrop-blur-sms mb-7 mx-auto rounded-lg shadow-sm text-left space-y-4  bg-white/100 w-72 p-4'>
                <h1 className='text-lg px-2 bg-violet-500 text-white rounded font-bold'>Credit Hour Remaining : {remaning} hr</h1>
                <hr />
                <h2 className='text-lg font-extrabold'>Course Name</h2>
                {
                    buttonWork.map((name, count) => <p>{count + 1}. {name.title}</p>)
                }
                <hr />
                <p className='text-lg font-semibold'>Total Credit Hour : <span className='text-violet-600'>{credit}</span> </p>
                <hr />
                <p className='text-lg font-bold'>Total Price : {totalPrice} USD</p>
            </div>
        </div>
    );
};

export default Card ;