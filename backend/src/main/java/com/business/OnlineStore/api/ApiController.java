package com.business.OnlineStore.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/get-message")
    public String getStrMessage(){
        return "Hello World Azure App!";
    }

}
