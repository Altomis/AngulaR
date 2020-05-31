import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FTP_Server } from 'src/app/Models/FTP'
import { environment } from 'src/app/Enviroment/environment'

@Injectable({
  providedIn: 'root'
})
export class FTPService{

  formData:FTP_Server
  list : FTP_Server[];
  readonly rootURL="http://localhost:49497/api"
  constructor(public http: HttpClient) { }
 
 getAllFTP_Servers(): Observable<FTP_Server[]> {
  var ftp_server = this.http.get<FTP_Server[]>(this.rootURL);
  if (ftp_server != null)
  {
    return ftp_server;
  }
}
getFTP_ServerById(ftp_serverid: string): Observable<FTP_Server> {
  var ftp_server = this.http.get<FTP_Server>(this.rootURL + ftp_serverid );
  if(ftp_server != null)
  {
    return ftp_server;
  }
  else
  {
    console.log("ftp_server is null");
  }
}
post(formData:FTP_Server){
  return this.http.post(this.rootURL+'/FTP_Server',formData)
    }
    
delFTP_Server(ftp_serverid: string): Observable<FTP_Server>{
  return this.http.delete<FTP_Server>(this.rootURL + ftp_serverid, {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  })
}
putFTP_Server(ftp_serverid: string, ftp_server: FTP_Server): Observable<FTP_Server>{
    return this.http.put<FTP_Server>(this.rootURL + ftp_serverid, ftp_server, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
    })
  })
}
}
