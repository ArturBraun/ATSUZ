package com.business.OnlineStore.servicies;

import com.business.OnlineStore.model.Category;
import com.business.OnlineStore.model.Product;
import com.business.OnlineStore.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriesService {
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoriesService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

}
