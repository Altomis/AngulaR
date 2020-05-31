import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from 'src/app/Models/clients'
import { environment } from 'src/app/Enviroment/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  formData:Clients
  list : Clients[];
  readonly rootURL="http://localhost:49497/api"
  constructor(public http:HttpClient) { }
  
  getAllClients(): Observable<Clients[]> {
    var client = this.http.get<Clients[]>(this.rootURL);
    if (client != null)
    {
      return client;
    }
  }
  getClientById(clientid: string): Observable<Clients> {
    var client = this.http.get<Clients>(this.rootURL + clientid);
    if(client != null)
    {
      return client;
    }
    else
    {
      console.log("client is null");
    }
  }
  post(formData:Clients){
    return this.http.post(this.rootURL+'/Clients',formData)
      }

   deleteEmployee(id : number){
        return this.http.delete(this.rootURL+'/Clients/'+id);
       }
  refreshList(){
    this.http.get(this.rootURL+'/Clients')
    .toPromise().then(res => this.list = res as Clients[]);
  }
  putClient(clientid: string, client: Clients): Observable<Clients>{
      return this.http.put<Clients>(this.rootURL + clientid, client, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }
}
