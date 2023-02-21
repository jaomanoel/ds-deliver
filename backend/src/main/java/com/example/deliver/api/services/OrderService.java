package com.example.deliver.api.services;

import com.example.deliver.api.mappers.OrderMapper;
import com.example.deliver.api.mappers.ProductMapper;
import com.example.deliver.cores.dtos.OrderDto;
import com.example.deliver.cores.dtos.ProductDto;
import com.example.deliver.cores.enums.OrderStatus;
import com.example.deliver.cores.exceptions.OrderNotFoundException;
import com.example.deliver.cores.models.ProductModel;
import com.example.deliver.cores.repositories.OrderRepository;
import com.example.deliver.cores.repositories.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private OrderMapper mapper;

    @Autowired
    private ProductRepository productRepository;


    @Transactional
    public List<OrderDto> getOrders() {
        return repository.finByOrderWithProducts().stream().map(item -> mapper.toDto(item)).collect(Collectors.toList());
    }

    public OrderDto createOrder(OrderDto orderDto){
        var model = mapper.toModel(orderDto);

        model.setMoment(Instant.now());

        for (ProductDto p : orderDto.getProducts()){
            var product = productRepository.findById(p.getId());

            model.getProducts().add(product.get());
            model = repository.save(model);
        }

        return mapper.toDto(model);
    }

    public OrderDto delivered(Long id){
        var model = repository.findById(id);

        if(!model.isPresent()){
            throw new OrderNotFoundException("Order not found!");
        }

        model.get().setStatus(OrderStatus.DELIVERED);
        repository.save(model.get());

        return mapper.toDto(model.get());
    }
}
