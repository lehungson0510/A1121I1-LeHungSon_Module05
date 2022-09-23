package son.codegym.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import son.codegym.entity.Package;

@Repository
public interface IPackageRepo extends PagingAndSortingRepository<Package, Integer> {
    @Query(value = "SELECT * FROM package where product_id like :id",
            nativeQuery = true)
    Iterable <Package> search(@Param("id") String productId);
}
