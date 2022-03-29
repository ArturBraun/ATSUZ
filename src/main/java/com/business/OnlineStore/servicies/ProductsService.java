package com.business.OnlineStore.servicies;

import com.business.OnlineStore.model.FeaturedProduct;
import com.business.OnlineStore.model.Product;
import com.business.OnlineStore.repositories.FeaturedProductRepository;
import com.business.OnlineStore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductsService {
    private ProductRepository productRepository;
    private FeaturedProductRepository featuredProductRepository;

    @Autowired
    public ProductsService(ProductRepository productRepository, FeaturedProductRepository featuredProductRepository) {
        this.productRepository = productRepository;
        this.featuredProductRepository = featuredProductRepository;
    }
    public Optional<Product> getProductById(Long id){
        return this.productRepository.findById(id);
    }

    public List<Product> getTop3FeaturedProducts(){
        return this.featuredProductRepository.findTop3ByOrderByIdAsc().stream().map(featuredProduct -> featuredProduct.getProduct()).collect(Collectors.toList());
    }
}
