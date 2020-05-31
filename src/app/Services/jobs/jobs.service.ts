import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/Models/jobs'
import { environment } from 'src/app/Enviroment/environment'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  formData:Jobs
  list : Jobs[];
  readonly rootURL="http://localhost:49497/api"
  constructor(public http: HttpClient) { }
  
  getAllJobs(): Observable<Jobs[]> {
    var jobs = this.http.get<Jobs[]>(this.rootURL);
    if (jobs != null)
    {
      return jobs;
    }
  }
  getJobsById(jobsid: string): Observable<Jobs> {
    var jobs = this.http.get<Jobs>(this.rootURL + jobsid );
    if(jobs != null)
    {
      return jobs;
    }
    else
    {
      console.log("jobs is null");
    }
  }
  post(formData:Jobs){
    return this.http.post(this.rootURL+'/Jobs',formData)
      }
      
  delJobs(jobsid: string): Observable<Jobs>{
    return this.http.delete<Jobs>(this.rootURL + jobsid, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  putJobs(jobsid: string, jobs: Jobs): Observable<Jobs>{
      return this.http.put<Jobs>(this.rootURL + jobsid, jobs, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }
}
