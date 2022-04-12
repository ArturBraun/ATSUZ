package com.business.OnlineStore.servicies;

import com.business.OnlineStore.common.ValidationException;
import com.business.OnlineStore.common.Validator;
import com.business.OnlineStore.model.Order;
import com.business.OnlineStore.model.OrderIdentification;
import com.business.OnlineStore.model.ProductOrder;
import com.business.OnlineStore.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrdersService {
    private OrderRepository orderRepository;
    private ProductOrderRepository productOrderRepository;

    @Autowired
    public OrdersService(OrderRepository orderRepository, ProductOrderRepository productOrderRepository) {
        this.orderRepository = orderRepository;
        this.productOrderRepository = productOrderRepository;
    }

    public Order createOrder(Order order){
        orderRepository.saveAndFlush(order);
        Long orderId = order.getId();
        List<ProductOrder> productOrders = order.getProductOrders();

        for(int i = 0; i < productOrders.size(); ++i){
            ProductOrder productOrder = productOrders.get(i);
            productOrder.setOrderId(orderId);
            productOrderRepository.saveAndFlush(productOrder);
        }

        return order;
    }

    public Order getOrderDetails(OrderIdentification orderIdentification) throws ValidationException {
        Validator.isValidOrderId(orderIdentification.getOrderId());
        Validator.isValidEmail(orderIdentification.getEmail());

        Long orderId = Long.parseLong(orderIdentification.getOrderId());
        Order order = orderRepository.findByIdAndEmail(orderId, orderIdentification.getEmail());
        if(order == null) return null;

        List<ProductOrder> productOrders = productOrderRepository.findByOrderId(orderId);
        order.setProductOrders(productOrders);

        return order;
    }
}
