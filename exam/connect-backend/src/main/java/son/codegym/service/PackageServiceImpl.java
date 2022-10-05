package son.codegym.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import son.codegym.entity.Package;
import son.codegym.repository.IPackageRepo;

import java.util.Optional;

@Service
public class PackageServiceImpl implements IPackageService {

    @Autowired
    IPackageRepo packageRepo;


    @Override
    public Page<Package> findAll(Pageable pageable) {
        return packageRepo.findAll(pageable);
    }

    @Override
    public Optional<Package> findById(int id) {
        return packageRepo.findById(id);
    }

    @Override
    public Package save(Package pack) {
        return packageRepo.save(pack);
    }

    @Override
    public void remove(int id) {
        packageRepo.deleteById(id);
    }

    //    @Override
//    public Page<Package> search(String id, String endDate, Pageable pageable) {
//        return packageRepo.findAllByProduct_NameContainingAndDateEndContaining('%' + id + '%','%' + endDate + '%',pageable);
//    }
    @Override
    public Page<Package> search(String id, String endDate, Pageable pageable) {
        return packageRepo.search(id ,  endDate , pageable);
    }
}
