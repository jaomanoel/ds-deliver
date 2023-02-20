package com.example.deliver.api.services;

import com.example.deliver.cores.models.OrderModel;
import com.example.deliver.cores.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public List<OrderModel> getRepository() {
        return repository.findAll();
    }
}
