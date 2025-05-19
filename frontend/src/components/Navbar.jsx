import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-info">
            <div class="container-fluid fs-5">
                <Link to={'/'} className='text-decoration-none'><a class="navbar-brand" href="#"><i class="bi bi-bag-dash-fill"></i> Ecommerce Sb + React</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto gap-lg-5 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to={'/'} className='text-decoration-none'> <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-house-add-fill"></i> Home</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/add-product'} className='text-decoration-none'><a class="nav-link" href="#"><i class="bi bi-plus-circle"></i> Add Product</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/view-products'} className='text-decoration-none'><a class="nav-link" href="#"><i class="bi bi-database-check"></i> Products</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/contact'} className='text-decoration-none'><a class="nav-link" href="#"><i class="bi bi-telephone"></i> Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar