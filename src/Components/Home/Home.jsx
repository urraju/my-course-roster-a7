
import React, { useState } from 'react'
import Fetch from '../DataFetch/Fetch'
import Card from '../Card/Card'
import Header from '../Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const budget = 20;
    const [buttonWork, setButtonWork] = useState([]);
    const [credit, setCredit] = useState(0);
    const [remaning, setRemaning] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const buttonHandler = (all) => {
        
        let credit = all.credit;
        let totalPrice = all.price;

        const istrue = buttonWork.find((item) => item.id === all.id)

         if(istrue){
            toast('You Have Already Selected')
         }else{
             
            buttonWork.forEach(item => {
                credit += item.credit;
                totalPrice += item.price;
            });
             
            const remaningHour = budget - credit;
            if(credit > budget){
                toast('You Have Not Enough Hour')
            }else{
                setTotalPrice(totalPrice)
                setCredit(credit)
                setRemaning(remaningHour)
                setButtonWork([...buttonWork , all])
            };
         };
    };
    return (
        <>
            <Header />
             <ToastContainer /> 
             <div className='flex flex-col-reverse md:flex-row lg:flex-row md:gap-10 lg:gap-10 justify-center  mx-auto'>

            <Fetch buttonHandler={buttonHandler} />
            <Card buttonWork={buttonWork} credit={credit} remaning={remaning} totalPrice={totalPrice} />

            </div>
             
        </>
    );
};

export default Home;