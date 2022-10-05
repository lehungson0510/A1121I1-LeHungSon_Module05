package son.codegym.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import son.codegym.entity.Package;

@Repository
public interface IPackageRepo extends PagingAndSortingRepository<Package, Integer> {
    @Query(value = "select p from Package p where p.product.name like %?1% and p.dateEnd like %?2%", nativeQuery = false)
    Page<Package> search(String idProduct, String endDate, Pageable pageable);

    Page<Package> findAllByProduct_NameContainingAndDateEndContaining(String idProduct, String endDate, Pageable pageable);
}
