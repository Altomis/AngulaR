import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from 'src/app/Models/mail'
import { environment } from 'src/app/Enviroment/environment'
@Injectable({
  providedIn: 'root'
})
export class Mailser {

  formData:Mail
  list : Mail[];
  
  url = 'http://localhost:49497/api'
  constructor(public http: HttpClient) { }
  
  

  post(formData:Mailser){
    return this.http.post(this.url+'/email',formData)
      }

}
