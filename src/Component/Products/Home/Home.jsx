import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContainer from '../ProductContainer/ProductContainer';
import './Home.css';

const Home = () => {

    const [productData, setproductData] = useState()



    useEffect(() => {
        const url = `https://dummyjson.com/products`
        const getData = async (url) => {
            const data = await axios.get(url)
            setproductData(data.data.products)
        }

        getData(url);
    }, []);


    return (
        <div className='name' >
            {productData && productData.map((element) => {
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

export default Home

