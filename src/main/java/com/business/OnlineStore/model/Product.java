package com.business.OnlineStore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "Products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Product_Id")
    private Long id;

    @Column(name = "Product_Name")
    private String name;

    @Column(name = "Product_Description")
    private String description;

    @Column(name = "Product_Price")
    private BigDecimal price;

    @Column(name = "Product_Category_Id", insertable = false, updatable = false)
    private Long categoryId;

    @Column(name = "Product_Delivery_Waiting_Time")
    private int deliveryWaitingTime;

    @Column(name = "Product_Image_Id")
    private Long imageId;

    @ManyToOne
    @JoinColumn(name = "Product_Category_Id")
    @JsonIgnore
    private Category category;

    @Column(name = "Product_production_quality")
    private String productionQuality;

    @Column(name = "Product_appearance")
    private String appearance;

    @Column(name = "Product_reliability")
    private String reliability;

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public int getDeliveryWaitingTime() {
        return deliveryWaitingTime;
    }

    public void setDeliveryWaitingTime(int deliveryWaitingTime) {
        this.deliveryWaitingTime = deliveryWaitingTime;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getProductionQuality() {
        return productionQuality;
    }

    public void setProductionQuality(String productionQuality) {
        this.productionQuality = productionQuality;
    }

    public String getAppearance() {
        return appearance;
    }

    public void setAppearance(String appearance) {
        this.appearance = appearance;
    }

    public String getReliability() {
        return reliability;
    }

    public void setReliability(String reliability) {
        this.reliability = reliability;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", categoryId=" + categoryId +
                ", deliveryWaitingTime=" + deliveryWaitingTime +
                ", imageId=" + imageId +
                ", category=" + category +
                ", productionQuality='" + productionQuality + '\'' +
                ", appearance='" + appearance + '\'' +
                ", reliability='" + reliability + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
