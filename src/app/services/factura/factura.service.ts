import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private API_SERVER="http://localhost:8080/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllFactura(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}


