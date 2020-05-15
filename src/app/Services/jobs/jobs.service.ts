import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/Models/jobs'
import { environment } from 'src/app/Enviroment/environment'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  //url = 'http://localhost:49497/api/Admin/';
  url = 'http://localhost:49497/api/Admin/'
  constructor(private http: HttpClient) { }
  
  getAllJobs(): Observable<Jobs[]> {
    var jobs = this.http.get<Jobs[]>(this.url);
    if (jobs != null)
    {
      return jobs;
    }
  }
  getJobsById(jobsid: string): Observable<Jobs> {
    var jobs = this.http.get<Jobs>(this.url + jobsid );
    if(jobs != null)
    {
      return jobs;
    }
    else
    {
      console.log("jobs is null");
    }
  }
  postJobs(jobs: Jobs): Observable<Jobs>{
    return this.http.post<Jobs>(this.url,jobs, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  delJobs(jobsid: string): Observable<Jobs>{
    return this.http.delete<Jobs>(this.url + jobsid, {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }
  putJobs(jobsid: string, jobs: Jobs): Observable<Jobs>{
      return this.http.put<Jobs>(this.url + jobsid, jobs, {
        headers: new HttpHeaders({
          'Content-type':'application/json'
      })
    })
  }
}
