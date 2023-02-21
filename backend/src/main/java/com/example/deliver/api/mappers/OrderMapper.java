package com.example.deliver.api.mappers;


import com.example.deliver.cores.dtos.OrderDto;
import com.example.deliver.cores.models.OrderModel;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    OrderModel toModel(OrderDto orderDto);
    OrderDto toDto(OrderModel orderModel);
}
