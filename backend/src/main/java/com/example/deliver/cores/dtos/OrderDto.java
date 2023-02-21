package com.example.deliver.cores.dtos;

import com.example.deliver.cores.enums.OrderStatus;
import lombok.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String address;
    private Double latitude;
    private Double longitude;
    private Instant moment;
    private OrderStatus status;
    private List<ProductDto> products = new ArrayList<>();
}
