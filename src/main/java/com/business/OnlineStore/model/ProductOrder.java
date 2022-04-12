package com.business.OnlineStore.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Orders_Products")
public class ProductOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OP_Id")
    private Long id;

    @Column(name = "OP_Order_Id")
    private Long orderId;

    @Column(name = "OP_Product_Id")
    private Long productId;

    @Column(name = "OP_Amount")
    private Long amount;

    public ProductOrder() {
    }

    public ProductOrder(Long productId, Long amount) {
        this.productId = productId;
        this.amount = amount;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductOrder that = (ProductOrder) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "ProductOrder{" +
                "id=" + id +
                ", orderId=" + orderId +
                ", productId=" + productId +
                ", amount=" + amount +
                '}';
    }

}
