import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Trending = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
            })
    }, []);
    return (
        <div className='mt-5 container'>
            <h1 className="text-center text-warning"><i class="bi bi-fire"></i> Trending Products</h1>
            <div className="row mt-4">
                {
                    products.map((product, index) => {
                        return (
                            <div key={index} className="col">
                                <div class="card" style={{ width: '18rem',height:'450px' }}>
                                    <img src={product.imageUrl} class="card-img-top" height={'200px'} alt="..." />
                                    <div class="card-body">
                                        <Link to={`/product-display/${product.id}`}><h5 class="card-title">{product.productName}</h5></Link>
                                        <p class="card-text">{product.description}</p>
                                        <p class="card-text text-secondary text-decoration-line-through">Old Price: ₹{product.oldPrice}</p>
                                        <p class="card-text">New Price: ₹{product.newPrice}</p>
                                        <a href="#" class="btn btn-warning">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Trending