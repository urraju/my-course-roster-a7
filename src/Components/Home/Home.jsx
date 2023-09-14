
import React, { useState } from 'react'
import Fetch from '../DataFetch/Fetch'
import Card from '../Card/Card'
import Header from '../Header/Header'

const Home = () => {

    const [buttonWork, setButtonWork] = useState([])

    const buttonHandler = (all) => {

        const istrue = buttonWork.find((item) => item.id === all.id)

         if(istrue){

         }else{

             setButtonWork([...buttonWork , all])
         }
    }
    return (
        <>
            <Header />
              
             <div className='flex gap-10 justify-between   mx-auto'>

            <Fetch buttonHandler={buttonHandler} />
            <Card buttonWork={buttonWork} />

            </div>
             
        </>
    )
}

export default Home