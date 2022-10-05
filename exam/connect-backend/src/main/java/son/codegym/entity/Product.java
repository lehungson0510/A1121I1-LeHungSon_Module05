package son.codegym.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    private String name;
    private String factory;
    private double price;
    private String currency;

    @JsonBackReference
    @OneToMany(mappedBy = "product",cascade = CascadeType.REMOVE)
    private Set<Package> packs;

    public Product() {
    }

    public Product(int id, String name, String factory, double price, String currency, Set<Package> packs) {
        this.id = id;
        this.name = name;
        this.factory = factory;
        this.price = price;
        this.currency = currency;
        this.packs = packs;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
