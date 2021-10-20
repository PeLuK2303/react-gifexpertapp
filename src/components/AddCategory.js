import PropTypes from 'prop-types';

import React, {useState} from 'react'


export const AddCategory = ({setCategorie}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{

        setInputValue(e.target.value);
    }

    const handelSubmit = (e) => {
        
        
        e.preventDefault();

        if( inputValue.trim().length > 1){
            setCategorie(cats => [ inputValue ,...cats]);
            setInputValue('');

        }

        
        // console.log('Submit hecho')
    }
        return (
      
        <form onSubmit = {handelSubmit}>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}

            />
        </form>
        
    )


}

    AddCategory.propTypes = {

        setCategorie : PropTypes.func.isRequired   
       
    }

    
