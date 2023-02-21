package com.example.deliver.cores.repositories;

import com.example.deliver.cores.dtos.OrderDto;
import com.example.deliver.cores.models.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {

    @Query("SELECT DISTINCT obj FROM OrderModel obj JOIN FETCH obj.products "
     + "WHERE obj.status = 0 ORDER BY obj.moment ASC")
    List<OrderModel> finByOrderWithProducts();
}
