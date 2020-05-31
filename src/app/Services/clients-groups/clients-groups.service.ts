import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsGroups } from 'src/app/Models/clients-groups'
import { environment } from 'src/app/Enviroment/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientsGroupsService {

  //url = 'http://localhost:49497/api/Admin/';
  url = 'http://localhost:49497/api/Admin/'
  constructor(public http: HttpClient) { }
  
  getAllClientsGroups(): Observable<ClientsGroups[]> {
    var clientsgroups = this.http.get<ClientsGroups[]>(this.url);
    if (clientsgroups != null)
    {
      return clientsgroups;
    }
  }
  getClientsGroupsById(clientsgroupsid: string): Observable<ClientsGroups> {
    var clientsgroups = this.http.get<ClientsGroups>(this.url + clientsgroupsid );
    if(clientsgroups != null)
    {
      return clientsgroups;
    }
    else
    {
      console.log("clientsgroups is null");
    }
  }
  postClientsGroups(clientsgroups: ClientsGroups): Observable<ClientsGroups>{
    return this.http.post<ClientsGroups>(this.url,clientsgroups, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  delClientsGroups(clientsgroupsid: string): Observable<ClientsGroups>{
    return this.http.delete<ClientsGroups>(this.url + clientsgroupsid, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  putClientsGroups(clientsgroupsid: string, clientsgroups: ClientsGroups): Observable<ClientsGroups>{
      return this.http.put<ClientsGroups>(this.url + clientsgroupsid, clientsgroups, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }

}
