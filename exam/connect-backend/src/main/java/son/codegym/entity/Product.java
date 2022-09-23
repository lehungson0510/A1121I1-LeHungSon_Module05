package son.codegym.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int productId;
    private String name;
    private String factory;
    private double price;
    private String currency;

    @JsonBackReference
    @OneToMany(mappedBy = "product",cascade = CascadeType.REMOVE)
    private Set<Package> packs;

    public Product() {
    }

    public Product(int productId, String name, String factory, double price, String currency, Set<Package> packs) {
        this.productId = productId;
        this.name = name;
        this.factory = factory;
        this.price = price;
        this.currency = currency;
        this.packs = packs;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFactory() {
        return factory;
    }

    public void setFactory(String factory) {
        this.factory = factory;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Set<Package> getPacks() {
        return packs;
    }

    public void setPacks(Set<Package> packs) {
        this.packs = packs;
    }
}
