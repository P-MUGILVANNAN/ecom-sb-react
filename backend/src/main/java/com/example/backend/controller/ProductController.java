package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
//	Create products
	@PostMapping
	public Product createProduct(@RequestBody Product product) {
		productRepository.save(product);
		return product;
	}
	
//	Get all products
	@GetMapping
	public List<Product> getProducts(){
		return productRepository.findAll();
	}
	
//	Get products by Id
	@GetMapping("/{id}")
	public Optional<Product> getProductById(@PathVariable Long id) {
		return productRepository.findById(id);
	}
	
//	Update the product
	@PutMapping("/{id}")
	public Product updateProduct(@PathVariable Long id,@RequestBody Product product) {
		product.setId(id);
		return productRepository.save(product);
	}
	
//	Delete the product
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable Long id) {
		productRepository.deleteById(id);
	}
	
	
	
}
