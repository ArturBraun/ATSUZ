package com.business.OnlineStore.api;

import com.business.OnlineStore.model.Category;
import com.business.OnlineStore.model.Image;
import com.business.OnlineStore.model.Product;
import com.business.OnlineStore.model.SimpleMessage;
import com.business.OnlineStore.servicies.CategoriesService;
import com.business.OnlineStore.servicies.ImagesService;
import com.business.OnlineStore.servicies.ProductsService;
import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ApiController {
    private Logger logger = Logger.getLogger(ApiController.class.getName());
    private CategoriesService categoriesService;
    private ImagesService imagesService;
    private ProductsService productsService;

    @Autowired
    public ApiController(CategoriesService categoriesService, ImagesService imagesService, ProductsService productsService) {
        this.categoriesService = categoriesService;
        this.imagesService = imagesService;
        this.productsService = productsService;
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

    @GetMapping(
            value = "/v1/image",
            produces = MediaType.IMAGE_JPEG_VALUE
    )
    public ResponseEntity<byte[]> getImageWithMediaType(@RequestParam Long id) {
        logger.info(String.format("Returning image of id = %d", id));
        return ResponseEntity.ok(this.imagesService.getImageById(id).get().getImageContent());
    }

    @PostMapping("/v1/image")
    public void addNewImage(@RequestBody byte[] imageContent){
        Image image = new Image(imageContent);
        logger.info("Saving new image to DB");
        this.imagesService.addNewImage(image);
        logger.info(String.format("New image of id = %d saved", image.getId()));
    }

    @GetMapping("/v1/product")
    public Product getProductById(@RequestParam Long id){
        logger.info(String.format("Returning product of id = %d", id));
        Product product = this.productsService.getProductById(id).get();
        logger.info(product.toString());

        return product;
    }

    @GetMapping("/v1/products-by-category")
    public List<Product> getProductsByCategoryId(@RequestParam Long categoryId){
        logger.info(String.format("Returning all products from category of id = %d", categoryId));
        List<Product> products = this.categoriesService.getAllProductsFromCategory(categoryId);
        logger.info(products.toString());

        return products;
    }

}
