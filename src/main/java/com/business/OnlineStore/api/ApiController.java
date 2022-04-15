package com.business.OnlineStore.api;

import com.business.OnlineStore.common.ValidationException;
import com.business.OnlineStore.model.*;
import com.business.OnlineStore.servicies.CategoriesService;
import com.business.OnlineStore.servicies.ImagesService;
import com.business.OnlineStore.servicies.OrdersService;
import com.business.OnlineStore.servicies.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ApiController {
    private Logger logger = Logger.getLogger(ApiController.class.getName());
    private CategoriesService categoriesService;
    private ImagesService imagesService;
    private ProductsService productsService;
    private OrdersService ordersService;

    @Autowired
    public ApiController(CategoriesService categoriesService, ImagesService imagesService, ProductsService productsService, OrdersService ordersService) {
        this.categoriesService = categoriesService;
        this.imagesService = imagesService;
        this.productsService = productsService;
        this.ordersService = ordersService;
    }

    @GetMapping("/v1/categories")
    public List<Category> getAllCatgories(){
        logger.info("GET request to /categories");
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

    @PostMapping("/v1/update-image")
    public void updateImage(@RequestParam Long id, @RequestBody byte[] imageContent){
        Image image = new Image(id, imageContent);
        logger.info(String.format("Updating image with id = %d", image.getId()));
        this.imagesService.updateImage(image);
        logger.info(String.format("Image with id = %d updated", image.getId()));
    }

    @GetMapping("/v1/product")
    public ResponseEntity getProductById(@RequestParam Long id){
        logger.info(String.format("Returning product of id = %d", id));
        Product product = this.productsService.getProductById(id).get();
        logger.info(product.toString());

        return ResponseEntity.ok(product);
    }

    @GetMapping("/v1/category")
    public ResponseEntity getCategoryById(@RequestParam Long id){
        logger.info(String.format("Returning category of id = %d", id));
        Optional<Category> categoryOptional = categoriesService.getCategoryById(id);

        if(categoryOptional.isPresent()){
            Category category = categoryOptional.get();
            logger.info(category.toString());
            return ResponseEntity.ok(category);
        }
        else {
            logger.info(String.format("Category of id = %d not found", id));
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/v1/products-by-category")
    public List<Product> getProductsByCategoryId(@RequestParam Long categoryId, Sort sort){
        logger.info(String.format("Returning all products from category of id = %d", categoryId));
        List<Product> products = this.productsService.getAllProductsFromCategory(categoryId, sort);
        logger.info(products.toString());

        return products;
    }

    @GetMapping("/v1/featured-products")
    public List<Product> getFeaturedProducts(){
        logger.info("Returning top 3 featured products");
        List<Product> products = this.productsService.getTop3FeaturedProducts();
        logger.info(products.toString());

        return products;
    }

    @GetMapping("/v1/hits-of-the-day")
    public List<Product> getHitsOfTheDay(){
        logger.info("Returning top 2 hits of the day");
        List<Product> products = this.productsService.getTop2HitsOfTheDay();
        logger.info(products.toString());

        return products;
    }

    @PostMapping("/v1/search")
    public List<Product> getSearchResults(@RequestBody SearchMessage searchMessage){
        logger.info("/v1/search - Returning search results for " + searchMessage.toString());
        List<Product> products = this.productsService.getAllProductsThatMatchesSearchText(searchMessage);
        logger.info(products.toString());

        return products;
    }

    @PostMapping("/v1/order")
    public ResponseEntity createOrder(@RequestBody Order order){
        try{
            logger.info("Creating new order - " + order.toString());
            order = this.ordersService.createOrder(order);
            logger.info("New order created - " + order.toString());

            return ResponseEntity.ok(order);
        }
        catch (ValidationException exception){
            logger.info(exception.getMessage());
            return ResponseEntity.unprocessableEntity().body(exception.getMessage());
        }
    }

    @PostMapping("/v1/order-details")
    public ResponseEntity getOrderByCategoryId(@RequestBody OrderIdentification orderIdentification){
        try{
            logger.info("Returning order details of order = " + orderIdentification.toString());
            Order order = ordersService.getOrderDetails(orderIdentification);

            if(order == null) {
                String errorMessage = String.format("Dla %s nie istnieje zamówienie o numerze %s!", orderIdentification.getEmail(), orderIdentification.getOrderId());
                logger.info(errorMessage);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
            }

            logger.info(order.toString());
            return ResponseEntity.ok(order);
        }
        catch(ValidationException exception){
            logger.info(exception.getMessage());
            return ResponseEntity.unprocessableEntity().body(exception.getMessage());
        }
    }
}
