package com.example.deliver.cores.exceptions;

import jakarta.persistence.EntityNotFoundException;

public class OrderNotFoundException extends EntityNotFoundException {

    public OrderNotFoundException(String msg) { super(msg); }
}
