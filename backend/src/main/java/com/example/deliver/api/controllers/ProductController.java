package com.example.deliver.api.controllers;

import com.example.deliver.cores.dtos.ProductDto;
import com.example.deliver.api.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<List<ProductDto>> getProducts(){
        return ResponseEntity.ok().body(service.getProducts());
    }
}
