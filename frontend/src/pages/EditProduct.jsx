import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [oldPrice, setOldPrice] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [stock, setStock] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/products/${id}`)
            .then((response) => {
                const { productName, description, oldPrice, newPrice, imageUrl, stock } = response.data;
                setProductName(productName || '');
                setDescription(description || '');
                setOldPrice(oldPrice || 0);
                setNewPrice(newPrice || 0);
                setImageUrl(imageUrl || '');
                setStock(stock || 0);
            })
            .catch((err) => {
                console.log('Error getting product: ' + err);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const product = {
            productName: productName,
            description: description,
            oldPrice: oldPrice,
            newPrice: newPrice,
            imageUrl: imageUrl,
            stock: stock,
        };

        axios
            .put(`http://localhost:8080/api/products/${id}`, product)
            .then((res) => {
                alert('Product updated successfully');
                console.log(res.data);
                window.location.replace('/view-products');
            })
            .catch((err) => {
                console.error('Error updating product:', err);
            });
    };

    return (
        <div className="container mt-5 w-75">
            <h2 className="text-center text-warning">
                <i className="bi bi-plus-circle"></i> Edit Product
            </h2>
            <div>
                <form className="form mt-5" onSubmit={handleUpdate}>
                    <p>
                        Product Name:{' '}
                        <input
                            type="text"
                            name="productName"
                            className="form-control"
                            placeholder="Enter product name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </p>
                    <p>
                        Description:{' '}
                        <textarea
                            name="description"
                            cols="30"
                            rows="2"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </p>
                    <div className="input-group gap-lg-5 gap-md-5 gap-sm-2 gap-2">
                        <p>
                            Old Price:{' '}
                            <input
                                type="number"
                                name="oldPrice"
                                className="form-control"
                                placeholder="Enter Old Price"
                                value={oldPrice}
                                onChange={(e) => setOldPrice(e.target.value)}
                            />
                        </p>
                        <p>
                            New Price:{' '}
                            <input
                                type="number"
                                name="newPrice"
                                className="form-control"
                                placeholder="Enter New Price"
                                value={newPrice}
                                onChange={(e) => setNewPrice(e.target.value)}
                            />
                        </p>
                    </div>
                    <p>
                        Image Url:{' '}
                        <input
                            type="text"
                            name="imageUrl"
                            className="form-control"
                            placeholder="Enter image url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </p>
                    <p>
                        Stock:{' '}
                        <input
                            type="number"
                            name="stock"
                            className="form-control"
                            placeholder="Enter stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </p>
                    <button type="submit" className="btn btn-primary">
                        Update Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;