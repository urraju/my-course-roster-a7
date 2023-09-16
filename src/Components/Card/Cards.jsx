
import React from 'react'
import { BsBook, BsCurrencyDollar } from 'react-icons/bs';

const Cards = ({data , buttonHandler}) => {
    const {id, img, title, description, price, credit} = data;

    return (

        <div>
            <div className='text-left shadow-sm  bg-white space-y-3 p-3 rounded-lg'>
                <img className='mx-auto' src={img} alt="" />
                <h1 className='text-lg font-extrabold'>{title}</h1>
                <p className='text-gray-500 text-sm'>{description}</p>
                <div className='flex items-center justify-between'>
                    <a className='text-2xl' href="">{<BsCurrencyDollar />}</a>
                    <p  className='text-gray-500 text-md'>Price : {price}</p>
                    <a className='text-xl' href="">{<BsBook />}</a>
                    <p  className='text-gray-500 text-md'>Credit : {credit}hr</p>
                </div>
                <button onClick={() => buttonHandler(data)} className=' bg-gradient-to-r from-gray-50 to-cyan-400 hover:from-green-500 hover:to-gray-50 font-semibold py-1 text-white w-full rounded'>Select</button>
            </div>
        </div>
    );
};

export default Cards;