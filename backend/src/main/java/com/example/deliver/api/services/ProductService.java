package com.example.deliver.api.services;

import com.example.deliver.cores.dtos.ProductDto;
import com.example.deliver.api.mappers.ProductMapper;
import com.example.deliver.cores.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private ProductMapper mapper;

    public List<ProductDto> getProducts(){
        return repository.findAllByOrderByNameAsc().stream().map(item -> mapper.toDto(item)).collect(Collectors.toList());
    }
}
