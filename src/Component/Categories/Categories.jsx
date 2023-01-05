import React from 'react';
import './Categories.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    const navigate = useNavigate();

    const [categories, setcategories] = useState();

    useEffect(() => {
        (async function () {
            const url = `https://dummyjson.com/products/categories`;
            const data = await axios.get(url);
            setcategories(data.data)
        }())
    }, [])

    const clickedCategory = (value) => {
        navigate('/showcategories', {
            state: {
                category: value
            }
        })
        console.log(value);
    }


    return (
        <div className='categories' >
            {
                categories && categories.map((value, index) => {
                    return <div key={index} className="category" >
                        <span onClick={() => { clickedCategory({ value }) }} >{value}</span>
                    </div>
                })
            }
        </div>
    )
}

export default Categories