package com.business.OnlineStore.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Image_Id")
    private Long id;

    @Column(name = "Image_Content")
    private byte[] imageContent;

    public Image() {
    }

    public Image(byte[] imageContent) {
        this.imageContent = imageContent;
    }

    public Image(Long id, byte[] imageContent) {
        this.id = id;
        this.imageContent = imageContent;
    }

    public byte[] getImageContent() {
        return imageContent;
    }

    public void setImageContent(byte[] imageContent) {
        this.imageContent = imageContent;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Image image = (Image) o;
        return Objects.equals(id, image.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
