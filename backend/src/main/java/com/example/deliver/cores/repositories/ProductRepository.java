package com.example.deliver.cores.repositories;

import com.example.deliver.cores.models.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long> {

    List<ProductModel> findAllByOrderByNameAsc();
}
