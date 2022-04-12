package com.business.OnlineStore.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Orders")
public class Order {
    static public final String PAY_BY_CASH = "PAYMENT_BY_CASH";
    static public final String PAY_BY_CARD = "PAYMENT_BY_CARD";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Order_Id")
    private Long id;

    @Column(name = "Order_client_name")
    private String name;

    @Column(name = "Order_client_surname")
    private String surname;

    @Column(name = "Order_address")
    private String address;

    @Column(name = "Order_postcode")
    private String postcode;

    @Column(name = "Order_city")
    private String city;

    @Column(name = "Order_email")
    private String email;

    @Column(name = "Order_phone_number")
    private String phoneNumber;

    @Column(name = "Order_payment_method")
    private String paymentMethod;

    @Transient
    private List<ProductOrder> productOrders = new ArrayList<>();

    public Order() {
    }

    public Order(String name, String surname, String address, String postcode, String city, String email, String phoneNumber, String paymentMethod, List<ProductOrder> productOrders) {
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.postcode = postcode;
        this.city = city;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.paymentMethod = paymentMethod;
        this.productOrders = productOrders;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public List<ProductOrder> getProductOrders() {
        return productOrders;
    }

    public void setProductOrders(List<ProductOrder> productOrders) {
        this.productOrders = productOrders;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return Objects.equals(id, order.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", address='" + address + '\'' +
                ", postcode='" + postcode + '\'' +
                ", city='" + city + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", paymentMethod='" + paymentMethod + '\'' +
                ", productOrders=" + productOrders +
                '}';
    }
}
