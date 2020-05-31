import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groups } from 'src/app/Models/groups'
import { environment } from 'src/app/Enviroment/environment'
@Injectable({
  providedIn: 'root'
})
export class GroupsService {

 //url = 'http://localhost:49497/api/Admin/';
 url = 'http://localhost:49497/api/Admin/'
 constructor(public http: HttpClient) { }
 
 getAllGroups(): Observable<Groups[]> {
  var groups = this.http.get<Groups[]>(this.url);
  if (groups != null)
  {
    return groups;
  }
}
getGroupsById(groupsid: string): Observable<Groups> {
  var groups = this.http.get<Groups>(this.url + groupsid );
  if(groups != null)
  {
    return groups;
  }
  else
  {
    console.log("groups is null");
  }
}
postGroups(groups: Groups): Observable<Groups>{
  return this.http.post<Groups>(this.url,groups, {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  })
}
delGroups(groupsid: string): Observable<Groups>{
  return this.http.delete<Groups>(this.url + groupsid, {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  })
}
putGroups(groupsid: string, groups: Groups): Observable<Groups>{
    return this.http.put<Groups>(this.url + groupsid, groups, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
    })
  })
}
}
