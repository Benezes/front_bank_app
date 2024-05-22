import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http
      .get(this.apiUrl, { params })
      .pipe(catchError(this.handleError));
  }

  getCliente(email: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${email}`)
      .pipe(catchError(this.handleError));
  }

  createCliente(cliente: any): Observable<any> {
    return this.http
      .post(this.apiUrl, cliente)
      .pipe(catchError(this.handleError));
  }

  updateCliente(email: string, cliente: any): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/${email}`, cliente)
      .pipe(catchError(this.handleError));
  }

  deleteCliente(email: string): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${email}`)
      .pipe(catchError(this.handleError));
  }

  createTransacao(transacao: any): Observable<any> {
    return this.http
      .post('http://localhost:8080/api/transacoes', transacao)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Server Error');
  }
}
