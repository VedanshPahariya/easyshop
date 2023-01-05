import React from 'react'
import './GetOne.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GetOne = ({ }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [productData, setproductData] = useState();
    const [productImg, setproductImg] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://dummyjson.com/products/${location.state.id}`;
            const apiData = await axios.get(url);
            const productData = await apiData.data;
            setproductData(productData);
            setproductImg(productData.images[0])
        }
        fetchData();
        // eslint-disable-next-line
    }, [])


    const addToCart = async () => {

        if (!localStorage.getItem('id')) {
            navigate('/login');
        } else {
            await fetch(`https://dummyjson.com/carts/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: localStorage.getItem('id'),
                    products: [
                        {
                            id: location.state.id,
                            quantity: 1
                        }
                    ]
                })
            }).then(res => res.json())
                .then(console.log);
        }
    }


    return (
        <div className='get-one' >
            {
                productData &&
                <div className="get-one-div">
                    <div className="product-preview">
                        {productData.images.map((img, index) => {
                            return <div key={index} onClick={() => {
                                setproductImg(img);
                            }} >
                                <img src={img} alt="" />
                            </div>
                        })}
                    </div>

                    <div className="product-images">
                        <img src={productImg && productImg} alt="" />
                    </div>

                    <div className="product-details">

                        <div className="item-title">
                            {productData.title}
                        </div>


                        <div className="item-rating">
                            <span id='rating' >{productData.rating} </span>
                            <span id='star' >*</span>
                        </div>

                        <div className="item-price">
                            ₹ {productData.price * 100}
                        </div>

                        <div className="item-branding">
                            <strong>{productData.category}</strong> from <strong>{productData.brand}</strong>
                        </div>

                        {
                            productData.discountPercentage &&
                            <div className="item-discount">
                                <strong style={{ color: 'green' }} > Offer : </strong> You will get <strong style={{ color: '#17a8e4' }} >{productData.discountPercentage}% discount</strong>
                            </div>
                        }

                        <div className="item-stock">
                            <u>{productData.stock} available in stocks</u>
                        </div>

                        <div className="item-description">
                            {productData.description}
                        </div>

                        <div className="addToCart">
                            <button onClick={addToCart} >Add To Cart</button>

                        </div>

                    </div>

                </div>
            }
        </div>
    )
}

export default GetOne