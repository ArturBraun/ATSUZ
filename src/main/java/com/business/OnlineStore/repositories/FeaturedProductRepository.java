package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.FeaturedProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FeaturedProductRepository extends JpaRepository<FeaturedProduct, Long> {
    List<FeaturedProduct> findTop3ByOrderByIdAsc();
}
