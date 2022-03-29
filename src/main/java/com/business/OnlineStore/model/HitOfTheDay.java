package com.business.OnlineStore.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Hits_Of_The_Day")
public class HitOfTheDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Hit_Id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "Hit_Product_Id")
    private Product product;

    public HitOfTheDay() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HitOfTheDay that = (HitOfTheDay) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "HitOfTheDay{" +
                "id=" + id +
                '}';
    }
}
