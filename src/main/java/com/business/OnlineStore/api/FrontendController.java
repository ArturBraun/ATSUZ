package com.business.OnlineStore.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;

@Controller
public class FrontendController {

    @RequestMapping(value = { "/", "" })
    public String getFrontendPages(HttpServletRequest request) {
        return "index.html";
    }

    @RequestMapping(value = {"/category/**"})
    public String getProductsFromCategory() {
        return "/";
    }

    @RequestMapping(value = {"/product/**"})
    public String getProductsDetails() {
        return "/";
    }

    @RequestMapping(value = {"/order-search"})
    public String getOrderSearch() {
        return "/";
    }

    @RequestMapping(value = {"/cart"})
    public String getCart() {
        return "/";
    }

    @RequestMapping(value = {"/search/**"})
    public String getSearchResults() {
        return "/";
    }

    @RequestMapping(value = {"/not-found"})
    public String getNotFoundPage() {
        return "/";
    }

}
