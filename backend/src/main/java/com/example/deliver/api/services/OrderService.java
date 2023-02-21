package com.example.deliver.api.services;

import com.example.deliver.api.mappers.OrderMapper;
import com.example.deliver.cores.dtos.OrderDto;
import com.example.deliver.cores.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private OrderMapper mapper;

    public List<OrderDto> getOrders() {
        return repository.finByOrderWithProducts().stream().map(item -> mapper.toDto(item)).collect(Collectors.toList());
    }
}
