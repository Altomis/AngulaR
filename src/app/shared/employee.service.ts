import { Injectable } from '@angular/core';
import { Emloyee } from './emloyee-model';
import{HttpClient,HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData:Emloyee
  list : Emloyee[];
  readonly rootURL="http://localhost:49497/api"

  constructor(private http:HttpClient) { }


  post(formData:Emloyee){
    return this.http.post(this.rootURL+'/Admin',formData)
      }

      refreshList(){
        this.http.get(this.rootURL+'/Admin')
        .toPromise().then(res => this.list = res as Emloyee[]);
      }
    
      putEmployee(formData : Emloyee){
        return this.http.put(this.rootURL+'/Admin/'+formData.Id,formData);
         
       }
    
       deleteEmployee(id : number){
        return this.http.delete(this.rootURL+'/Admin/'+id);
       }
}
