import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Path } from 'src/app/Models/path'
import { environment } from 'src/app/Enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class PathService  {

   //url = 'http://localhost:49497/api/Admin/';
   url = 'http://localhost:49497/api/Admin/'
   constructor(public http: HttpClient) { }
   
   getAllPaths(): Observable<Path[]> {
    var path = this.http.get<Path[]>(this.url);
    if (path != null)
    {
      return path;
    }
  }
  getPathById(pathid: string): Observable<Path> {
    var path = this.http.get<Path>(this.url + pathid );
    if(path != null)
    {
      return path;
    }
    else
    {
      console.log("path is null");
    }
  }
  postPath(path: Path): Observable<Path>{
    return this.http.post<Path>(this.url,path, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  delPath(pathid: string): Observable<Path>{
    return this.http.delete<Path>(this.url + pathid, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  putPath(pathid: string, path: Path): Observable<Path>{
      return this.http.put<Path>(this.url + pathid, path, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }

}
