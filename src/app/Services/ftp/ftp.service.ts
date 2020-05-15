import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FTP_Server } from 'src/app/Models/FTP'
import { environment } from 'src/app/Enviroment/environment'

@Injectable({
  providedIn: 'root'
})
export class FTPService{

 //url = 'http://localhost:49497/api/Admin/';
 url = 'http://localhost:49497/api/Admin/'
 constructor(private http: HttpClient) { }
 
 getAllFTP_Servers(): Observable<FTP_Server[]> {
  var ftp_server = this.http.get<FTP_Server[]>(this.url);
  if (ftp_server != null)
  {
    return ftp_server;
  }
}
getFTP_ServerById(ftp_serverid: string): Observable<FTP_Server> {
  var ftp_server = this.http.get<FTP_Server>(this.url + ftp_serverid );
  if(ftp_server != null)
  {
    return ftp_server;
  }
  else
  {
    console.log("ftp_server is null");
  }
}
postFTP_Server(ftp_server: FTP_Server): Observable<FTP_Server>{
  return this.http.post<FTP_Server>(this.url,ftp_server, {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  })
}
delFTP_Server(ftp_serverid: string): Observable<FTP_Server>{
  return this.http.delete<FTP_Server>(this.url + ftp_serverid, {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  })
}
putFTP_Server(ftp_serverid: string, ftp_server: FTP_Server): Observable<FTP_Server>{
    return this.http.put<FTP_Server>(this.url + ftp_serverid, ftp_server, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
    })
  })
}
}
