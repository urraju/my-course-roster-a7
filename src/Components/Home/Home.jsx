
import React, { useState } from 'react'
import Fetch from '../DataFetch/Fetch'
import Card from '../Card/Card'
import Header from '../Header/Header'

const Home = () => {
    const budget = 20;
    const [buttonWork, setButtonWork] = useState([])
    const [credit, setCredit] = useState(0)
    const [remaning, setRemaning] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)


    const buttonHandler = (all) => {
        
        let credit = all.credit;
        let totalPrice = all.price;

        const istrue = buttonWork.find((item) => item.id === all.id)

         if(istrue){
            alert('You Have Already Selected')
         }else{
             
            buttonWork.forEach(item => {
                credit += item.credit;
                totalPrice += item.price;
            })
             
            setCredit(credit)
            setTotalPrice(totalPrice)
            const remaningHour = budget - credit;
            if(credit > budget){
                alert('You Have Not Enough Money')
            }else{

                setRemaning(remaningHour)
                setButtonWork([...buttonWork , all])
            }
         }
    }
    return (
        <>
            <Header />
              
             <div className='flex gap-10 justify-between   mx-auto'>

            <Fetch buttonHandler={buttonHandler} />
            <Card buttonWork={buttonWork} credit={credit} remaning={remaning} totalPrice={totalPrice} />

            </div>
             
        </>
    )
}

export default Home