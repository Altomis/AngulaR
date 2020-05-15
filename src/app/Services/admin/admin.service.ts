import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Models/admin'
import { environment } from 'src/app/Enviroment/environment'
'../Models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:49497/api/Admin/'
  constructor(private http: HttpClient) { }

  getAllAdmins(): Observable<Admin[]> {
    var adm = this.http.get<Admin[]>(this.url);
    if (adm != null)
    {
      return adm;
    }
  }
  getAdminById(adminId: string): Observable<Admin> {
    var adm = this.http.get<Admin>(this.url + adminId);
    if(adm != null)
    {
      return adm;
    }
    else
    {
      console.log("admin is null");
    }
  }
  postAdmin(admin: Admin): Observable<Admin>{
    return this.http.post<Admin>(this.url,admin, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  delAdmin(adminId: string): Observable<Admin>{
    return this.http.delete<Admin>(this.url + adminId, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  putAdmin(adminId: string, admin: Admin): Observable<Admin>{
      return this.http.put<Admin>(this.url + adminId, admin, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }

}
