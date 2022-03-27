package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
