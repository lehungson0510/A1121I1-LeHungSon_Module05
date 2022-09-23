package son.codegym.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import son.codegym.entity.Product;
import son.codegym.repository.IProductRepo;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    IProductRepo productRepo;

    @Override
    public Iterable<Product> findAll() {
        return productRepo.findAll();
    }
}
