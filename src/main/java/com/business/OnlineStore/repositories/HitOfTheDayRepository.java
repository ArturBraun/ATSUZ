package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.HitOfTheDay;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HitOfTheDayRepository extends CrudRepository<HitOfTheDay, Long> {
    List<HitOfTheDay> findTop2ByOrderByIdAsc();
}
