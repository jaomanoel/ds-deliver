package com.example.deliver.api.mappers;

import com.example.deliver.cores.dtos.ProductDto;
import com.example.deliver.cores.models.ProductModel;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    ProductModel toModel(ProductDto productDto);
    ProductDto toDto(ProductModel productModel);
}
