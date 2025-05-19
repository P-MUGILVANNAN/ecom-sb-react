import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDisplay = () => {
    const { id } = useParams();
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [oldPrice, setOldPrice] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [stock, setStock] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
                const { productName, description, oldPrice, newPrice, imageUrl, stock } = response.data;
                setProductName(productName);
                setDescription(description);
                setOldPrice(oldPrice);
                setNewPrice(newPrice);
                setImageUrl(imageUrl);
                setStock(stock);
            })
            .catch(error => console.error('Error fetching product:', error));
    });
    return (
        <div className='container mt-5'>
            <div className="row align-items-center">
                <div className="col">
                    <img src={imageUrl} className='img-fluid' alt="" />
                </div>
                <div className="col">
                    <h2>{productName}</h2>
                    <p>{description}</p>
                    <p>Old Price: ₹{oldPrice}</p>
                    <p>New Price: ₹{newPrice}</p>
                    <p>{stock}</p>
                    <button className="btn btn-primary">Bye Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay