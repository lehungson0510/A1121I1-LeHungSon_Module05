import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Package} from '../models/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  // readonly API_URL = 'http://localhost:3000/packages';
  readonly API_URL = 'http://localhost:8080/api/packages';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Package[]> {
    return this.http.get<Package[]>(this.API_URL);
  }

  create(pack: Package): Observable<void> {
    return this.http.post<void>(this.API_URL, pack);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + '/' + id);
  }

  findById(id: number): Observable<Package> {
    return this.http.get<Package>(this.API_URL + '/' + id);
  }

  searchName(product: string, dateEnd: string, start: string, end: string): Observable<Package[]> {
    if (!(start === '' || end === '')) {
      return this.http.get<Package[]>(this.API_URL + '?product.id_like=' + product + '&dateEnd_like=' + dateEnd + '&dateImport_gte='
        + start + '&dateImport_lte=' + end);
    }
    return this.http.get<Package[]>(this.API_URL + '?product.id_like=' + product + '&dateEnd_like=' + dateEnd);
  }

  search(productId: string): Observable<Package[]> {
    return this.http.get<Package[]>(this.API_URL + '/search/' +  productId);
  }
}
