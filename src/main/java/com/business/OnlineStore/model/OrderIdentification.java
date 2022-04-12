package com.business.OnlineStore.model;

import java.util.Objects;

public class OrderIdentification {
    private String email = "";
    private String orderId = "";

    public OrderIdentification() {
    }

    public OrderIdentification(String email, String orderId) {
        this.email = email;
        this.orderId = orderId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderIdentification that = (OrderIdentification) o;
        return Objects.equals(email, that.email) && Objects.equals(orderId, that.orderId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, orderId);
    }

    @Override
    public String toString() {
        return "OrderIdentification{" +
                "email='" + email + '\'' +
                ", orderId='" + orderId + '\'' +
                '}';
    }
}
