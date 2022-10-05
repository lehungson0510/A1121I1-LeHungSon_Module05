package son.codegym.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import son.codegym.entity.Package;

import java.util.Optional;

public interface IPackageService<T> {
    Page<T> findAll(Pageable pageable);

    Optional<T> findById(int id);

    Package save(Package pack);

    void remove(int id);

    Page<T> search(String id, String endDate, Pageable pageable);
}
