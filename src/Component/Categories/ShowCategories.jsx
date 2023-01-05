import React from 'react';
import './ShowCategories.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductContainer from '../Products/ProductContainer/ProductContainer';

const ShowCategories = () => {

    const location = useLocation();

    const [data, setdata] = useState([]);

    useEffect(() => {
        const url = `https://dummyjson.com/products/category/${location.state.category.value}`
        console.log(url);
        const getData = async (url) => {
            const data = await axios.get(url)
            setdata(data.data.products)
        }

        getData(url);
    }, []);

    console.log(data)

    return (
        <div className="name">
            {data && data.map((element) => {
                return <div className='home' key={element.id} >
                    <ProductContainer
                        id={element.id}
                        title={element.title}
                        description={element.description}
                        brand={element.brand}
                        thumbnail={element.thumbnail}
                        url={`https://dummyjson.com/products/${element.id}`}
                    />
                </div>
            })}
        </div>
    )
}

export default ShowCategories