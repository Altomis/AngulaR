import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from 'src/app/Models/clients'
import { environment } from 'src/app/Enviroment/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  //url = 'http://localhost:49497/api/Admin/';
  url = 'http://localhost:49497/api/Admin/'
  constructor(private http: HttpClient) { }
  
  getAllClients(): Observable<Clients[]> {
    var client = this.http.get<Clients[]>(this.url);
    if (client != null)
    {
      return client;
    }
  }
  getClientById(clientid: string): Observable<Clients> {
    var client = this.http.get<Clients>(this.url + clientid);
    if(client != null)
    {
      return client;
    }
    else
    {
      console.log("client is null");
    }
  }
  postClient(client: Clients): Observable<Clients>{
    return this.http.post<Clients>(this.url,client, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  delClient(clientid: string): Observable<Clients>{
    return this.http.delete<Clients>(this.url + clientid, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  putClient(clientid: string, client: Clients): Observable<Clients>{
      return this.http.put<Clients>(this.url + clientid, client, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }
}
