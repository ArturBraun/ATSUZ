package com.business.OnlineStore.api;

import com.business.OnlineStore.model.Category;
import com.business.OnlineStore.model.SimpleMessage;
import com.business.OnlineStore.servicies.CategoriesService;
import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ApiController {
    private Logger logger = Logger.getLogger(ApiController.class.getName());
    private CategoriesService categoriesService;

    @Autowired
    public ApiController(CategoriesService categoriesService) {
        this.categoriesService = categoriesService;
    }

    @GetMapping("/v1/get-message")
    public SimpleMessage getStrMessage(){
        logger.info("GET request to /get-message");
        return new SimpleMessage("Hello World Azure App!");
    }

    @GetMapping("/v1/get-all-categories")
    public List<Category> getAllCatgories(){
        logger.info("GET request to /get-all-categories");
        List<Category> allCategories = categoriesService.getAllCategories();
        logger.info(allCategories.toString());

        return allCategories;
    }



}
