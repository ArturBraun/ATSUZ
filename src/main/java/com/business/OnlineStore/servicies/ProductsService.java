package com.business.OnlineStore.servicies;

import com.business.OnlineStore.model.Category;
import com.business.OnlineStore.model.Product;
import com.business.OnlineStore.repositories.FeaturedProductRepository;
import com.business.OnlineStore.repositories.HitOfTheDayRepository;
import com.business.OnlineStore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductsService {
    private ProductRepository productRepository;
    private FeaturedProductRepository featuredProductRepository;
    private HitOfTheDayRepository hitOfTheDayRepository;

    @Autowired
    public ProductsService(ProductRepository productRepository, FeaturedProductRepository featuredProductRepository, HitOfTheDayRepository hitOfTheDayRepository) {
        this.productRepository = productRepository;
        this.featuredProductRepository = featuredProductRepository;
        this.hitOfTheDayRepository = hitOfTheDayRepository;
    }

    public Optional<Product> getProductById(Long id){
        return this.productRepository.findById(id);
    }

    public List<Product> getTop3FeaturedProducts(){
        return this.featuredProductRepository.findTop3ByOrderByIdAsc().stream().map(featuredProduct -> featuredProduct.getProduct()).collect(Collectors.toList());
    }

    public List<Product> getTop2HitsOfTheDay(){
        return this.hitOfTheDayRepository.findTop2ByOrderByIdAsc().stream().map(hitOfTheDay -> hitOfTheDay.getProduct()).collect(Collectors.toList());
    }

    public List<Product> getAllProductsFromCategory(Long categoryId, Sort sort){
        return this.productRepository.findByCategoryId(categoryId, sort);
    }
}
