package son.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import son.codegym.entity.Package;
import son.codegym.service.IPackageService;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/packages")
public class PackageRestController {

    @Autowired
    private IPackageService packageService;

    @GetMapping("/{page}/{size}")
    public ResponseEntity<Page<Package>> findAllPackage(@PathVariable("page") Integer page
            , @PathVariable("size") Integer size
            , @RequestParam("product_id") Optional<String> productId
            , @RequestParam("endDate") Optional<String> endDate) {
        Page<Package> packageList;

        if (productId.isPresent() || (endDate.isPresent() && !endDate.get().isEmpty())) {
            Pageable pageable = PageRequest.of(page, size);
            packageList = packageService.search(productId.get(), endDate.get(), pageable);
            System.out.println(1);
        } else {
            Pageable pageable = PageRequest.of(page, size);
            packageList = packageService.findAll(pageable);
            System.out.println(2);
        }
        return new ResponseEntity<>(packageList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Package> findPackageById(@PathVariable int id) {
        Optional<Package> packageOptional = packageService.findById(id);
        if (!packageOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(packageOptional.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Package> savePackage(@RequestBody Package pack) {
        return new ResponseEntity<>(packageService.save(pack), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Package> updatePackage(@PathVariable int id, @RequestBody Package pack) {
        Optional<Package> packageOptional = packageService.findById(id);
        if (!packageOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        pack.setId(packageOptional.get().getId());
        return new ResponseEntity<>(packageService.save(pack), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Package> deletePackage(@PathVariable int id) {
        Optional<Package> packageOptional = packageService.findById(id);
        if (!packageOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        packageService.remove(id);
        return new ResponseEntity<>(packageOptional.get(), HttpStatus.NO_CONTENT);
    }

//    @GetMapping("/search/{idProduct}")
//    public ResponseEntity<Iterable<Package>> search(@PathVariable String idProduct) {
//        List<Package> packages = (List<Package>) packageService.search(idProduct);
//        if (packages.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(packages, HttpStatus.OK);
//    }
}
