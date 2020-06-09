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
   url = 'http://localhost:49497/api/'
   formData:Path
  list : Path[];
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
  post(formData:PathService){
    return this.http.post(this.url+'/Path',formData)
      }
      deleteEmployee(id : number){
        return this.http.delete(this.url+'/Path/'+id);
       }
  putPath(pathid: string, path: Path): Observable<Path>{
      return this.http.put<Path>(this.url + pathid, path, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }

  refreshList(){
    this.http.get(this.url+'/Path')
    .toPromise().then(res => this.list = res as Path[]);
  }

}
