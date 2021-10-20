import React, {useState} from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GiftExpertApp = () => {

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

const [categories, setCategories] = useState([]);

//    const handleAdd = () => {

//         const nombre = 'HunterXHunter'
//         setCategories([...categories, nombre]);

//          setCategories(cats => [...cats., 'HunterXHunter']);

//    }
    
    return (
        <>
             <h2>GiftExpertApp</h2>
             <AddCategory setCategorie ={ setCategories }/>
             <hr />
             
             <ol>
                 {  
                    categories.map( category => (
                        <GifGrid 
                        key = { category }
                        category = { category } 
                        />
                    ))
                 }
             </ol>
            
        </>
        

    )

}

export default GiftExpertApp
