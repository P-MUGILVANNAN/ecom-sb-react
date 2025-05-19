import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [oldPrice, setOldPrice] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [stock, setStock] = useState(0);


  const handleSubmit = (e)=>{
    e.preventDefault();
    const product = {
      productName : productName,
      description: description,
      oldPrice: oldPrice,
      newPrice: newPrice,
      imageUrl: imageUrl,
      stock: stock
    }
    console.log(product);
    axios.post('http://localhost:8080/api/products',product)
    .then((res)=>{
      alert('Product addedd successfully');
      console.log(res.data);
      setProductName(''); 
      setDescription(''); 
      setOldPrice(0); 
      setNewPrice(0); 
      setImageUrl(''); 
      setStock(0);
    })
    .catch((err)=>{
      console.error('Error adding product:', err);
    })
  }
  return (
    <div className='container mt-5 w-75'>
      <h2 className='text-center text-warning'><i class="bi bi-plus-circle"></i> Add New Product</h2>
      <div>
        <form action="" className="form mt-5" onSubmit={handleSubmit}>
          <p>Product Name: <input type="text" name='productName' className='form-control' placeholder='Enter product name' value={productName} onChange={(e) => setProductName(e.target.value)} required /></p>
          <p>Description: <textarea name="description" cols="30" rows="2" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} required></textarea></p>
          <div className="input-group gap-lg-5 gap-md-5 gap-sm-2 gap-2">
            <p>Old Price: <input type="number" name='oldPrice' className='form-control' placeholder='Enter Old Price' value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} required /></p>
            <p>New Price: <input type="number" name='newPrice' className='form-control' placeholder='Enter New Price' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} required /></p>
          </div>
          <p>Image Url: <input type="text" name='imageUrl' className='form-control' placeholder='Enter image url' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required /></p>
          <p>Stock: <input type="number" name='stock' className='form-control' placeholder='Enter stock' value={stock} onChange={(e) => setStock(e.target.value)} required /></p>
          <button type="submit" className='btn btn-primary'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct