package son.codegym.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import son.codegym.entity.Package;
import son.codegym.repository.IPackageRepo;

import java.util.Optional;

@Service
public class PackageServiceImpl implements IPackageService {

    @Autowired
    IPackageRepo packageRepo;


    @Override
    public Iterable<Package> findAll() {
        return packageRepo.findAll();
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

    @Override
    public Iterable<Package> search(String id) {
        return packageRepo.search('%' + id + '%');
    }
}
