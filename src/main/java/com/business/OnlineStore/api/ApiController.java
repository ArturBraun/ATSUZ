package com.business.OnlineStore.api;

import com.business.OnlineStore.model.SimpleMessage;
import org.apache.juli.logging.Log;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ApiController {
    private Logger logger = Logger.getLogger(ApiController.class.getName());

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/v1/get-message")
    public SimpleMessage getStrMessage(){
        logger.info("GET request to /get-message");
        return new SimpleMessage("Hello World Azure App!");
    }

}
