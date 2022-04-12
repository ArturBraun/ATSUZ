package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findByIdAndEmail(Long id, String email);
}
