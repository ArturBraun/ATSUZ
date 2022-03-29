package com.business.OnlineStore.servicies;

import com.business.OnlineStore.model.Image;
import com.business.OnlineStore.repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImagesService {
    private ImageRepository imageRepository;

    @Autowired
    public ImagesService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public void addNewImage(Image image){
        this.imageRepository.saveAndFlush(image);
    }

    public Optional<Image> getImageById(Long id){
        return this.imageRepository.findById(id);
    }

    public void updateImage(Image image){
        this.imageRepository.saveAndFlush(image);
    }
}
