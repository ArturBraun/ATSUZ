package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.Product;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryId(Long categoryId, Sort sort);

    @Query(
            value = "SELECT * FROM Products WHERE MATCH(Product_Name, Product_Description) " +
            "AGAINST(:searchText IN NATURAL LANGUAGE MODE)",
            nativeQuery = true
            )
    List<Product> getSearchResults(@Param("searchText") String searchText);
}
