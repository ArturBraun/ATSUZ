package com.business.OnlineStore.repositories;

import com.business.OnlineStore.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
