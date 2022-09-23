package son.codegym.service;

import son.codegym.entity.Package;

import java.util.Optional;

public interface IPackageService<T> {
    Iterable<T> findAll();

    Optional<T> findById(int id);

    Package save(Package pack);

    void remove(int id);

    Iterable<T> search(String id);
}
