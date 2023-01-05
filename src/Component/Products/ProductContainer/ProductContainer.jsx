import React from 'react'
import './ProductContainer.css'
import { useNavigate } from 'react-router-dom'

const ProductContainer = ({ id, title, description, thumbnail }) => {

  const navigate = useNavigate();

  const viewProduct = (e) => {
    e.preventDefault();
    navigate('/view', {
      state: {
        id: id
      }
    })
  }

  return (
    <div className="product-container">
      <img src={thumbnail} alt="Product Thumbnail" className="img" />
      <div className="body">
        <h5 className="title">{title}</h5>
        <p className="inner-text">{description}</p>
      </div>
      <button className='btn' onClick={viewProduct} >
        View Product
      </button>
    </div>
  )
}

export default ProductContainer