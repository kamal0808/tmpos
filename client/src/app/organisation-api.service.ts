import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganisationApiService {

  constructor(private http: HttpClient) {
  }


  private organisationProductsUrl = 'http://localhost:3000/api/Organisations/5bc3021f0b6b9c2b2e7bb690/products';

  getProducts(): Observable<any[]> {

    return this.http.get<any[]>(this.organisationProductsUrl );


    // return of([
    //   {
    //     text: 'first todo',
    //     createdAt: 'time of creation'
    //   },
    //   {
    //     text: 'second todo',
    //     createdAt: 'time of creation'
    //   },
    //   {
    //     text: 'third todo',
    //     createdAt: 'time of creation'
    //   }]);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.organisationProductsUrl , product);
  }

  deleteTodo(todoId: string, isDone: boolean): Observable<any> {
    return this.http.put(this.organisationProductsUrl +'/'+todoId, {isDone: isDone});
  }

  editTodo(todoId: string, todoText: string): Observable<any> {
    return this.http.put(this.organisationProductsUrl +'/'+todoId, {text: todoText});
  }
}
