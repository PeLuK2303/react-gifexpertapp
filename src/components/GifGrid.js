import React /*useEffect, useState*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpels/getGifs';
import {GifGridItem} from '../components/GifGridItem';


export const GifGrid = ({category}) => {

    

    const  { data, loading } = useFetchGifs(category);
    


    return (
        
        <>

        <h3 className='animate__animated animate__bounce animate__delay-2s'>{ category }</h3>
        { loading && <p>Loading </p> }



           
            <div className="card-grid">
            {  
                    data.map( ( img =>
                        <GifGridItem            
                        key = {img}
                        { ...img }
                        />
                    ))
            }
        </div>
        </>

    )
}


