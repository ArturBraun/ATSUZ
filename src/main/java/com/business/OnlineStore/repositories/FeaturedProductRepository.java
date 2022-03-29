package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.FeaturedProduct;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FeaturedProductRepository extends CrudRepository<FeaturedProduct, Long> {
    List<FeaturedProduct> findTop3ByOrderByIdAsc();
}
