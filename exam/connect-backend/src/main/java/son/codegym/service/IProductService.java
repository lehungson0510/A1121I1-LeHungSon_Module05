package son.codegym.service;

import son.codegym.entity.Product;

public interface IProductService <T> {
    Iterable<T> findAll();
}
