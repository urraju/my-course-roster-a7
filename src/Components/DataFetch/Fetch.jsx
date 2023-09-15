

import React, { useEffect, useState } from 'react'
import Cards from '../Card/Cards'

const Fetch = ({buttonHandler}) => {
     const [dataStore , setDataStore] = useState([])
    useEffect( () => {

        fetch('data.json')
        .then(res => res.json())
        .then(data => setDataStore(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                dataStore.map(data => <Cards key={data.id} data={data} buttonHandler={buttonHandler}  />)
            }
        </div>
    );
};

export default Fetch