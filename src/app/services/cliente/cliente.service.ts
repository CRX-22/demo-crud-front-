import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private API_SERVER="http://localhost:8080/cliente";
  constructor(
    private httpClient: HttpClient
  ) { 

  }
  public getAllCliente(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}
