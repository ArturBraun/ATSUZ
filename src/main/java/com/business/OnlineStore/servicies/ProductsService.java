package com.business.OnlineStore.servicies;

import com.business.OnlineStore.model.Product;
import com.business.OnlineStore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductsService {
    private ProductRepository productRepository;

    @Autowired
    public ProductsService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Optional<Product> getProductById(Long id){
        return this.productRepository.findById(id);
    }
}
