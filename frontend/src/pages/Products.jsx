import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
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

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:8080/api/products/${id}`)
      .then(() => {
        alert('Product deleted successfully');
        setProducts(products.filter(product => product.id !== id));
      })
      .catch((err) => {
        console.error('Error deleting product:', err);
      });
  }
  return (
    <div className='container mt-5'>
      <table className="table mt-5 table-bordered">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Old Price</th>
              <th>New Price</th>
              <th>Stock</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product,index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.productName}</td>
                    <td>{product.description}</td>
                    <td><img src={product.imageUrl} height={'70px'} width={'70px'} alt="" /></td>
                    <td>{product.oldPrice}</td>
                    <td>{product.newPrice}</td>
                    <td>{product.stock}</td>
                    <td><Link to={`/edit-product/${product.id}`}><button className="btn btn-primary">Edit</button></Link></td>
                    <td><button className="btn btn-danger" onClick={()=>handleDelete(product.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>
    </div>
  )
}

export default Products