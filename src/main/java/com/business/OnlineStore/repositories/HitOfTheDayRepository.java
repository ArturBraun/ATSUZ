package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.HitOfTheDay;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HitOfTheDayRepository extends JpaRepository<HitOfTheDay, Long> {
    List<HitOfTheDay> findTop2ByOrderByIdAsc();
}
