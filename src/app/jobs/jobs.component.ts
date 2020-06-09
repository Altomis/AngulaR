import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/Services/jobs/jobs.service';
import { FTPService } from 'src/app/Services/ftp/ftp.service';
import { PathService } from 'src/app/Services/path/path.service';
import { ClientsGroupsService } from 'src/app/Services/clients-groups/clients-groups.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { FtpserverComponent } from '../ftpserver/ftpserver.component';
import { PathsComponent } from 'src/app/Paths/Paths.component';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(public service:JobsService,public service1:PathService, public dialog:MatDialog,
   toastr: ToastrService) { }
   
   BackupType = [
    { "name": "full", BackupType: "full" },
    { "name": "diff", BackupType: "diff" },
    { "name": "incr", BackupType: "incr" }];
   
    

 
    ngOnInit(): void {
      this.reserForm();
      
    }

 
    
    onCreate(){
      this.dialog.open(PathsComponent);
  
    }
  
    reserForm(form?:NgForm){
      if(form!=null)
        form.resetForm();

                this.service.formData={
                  Id: null,
                  BackupType:"",
                  CronTime: "",
                  Ends: "",
                  MaxSecBackup:null,
                  MaxFullBackup:null,
                  ToZip: true,
              }     
              
                this.service1.formData={
                  Id: null,
                  IdJob: null,
                  Source: "",
                  IdFTP: null,
                  Which: true,
                  Login: "",
                  Password: "",
              }
    }

    
    
    onSubmit(form:NgForm){
      this.insertRecord(form);
      
     
    }
  
  
    insertRecord(form:NgForm){
      this.service.post(form.value).subscribe(res=>{
        this.reserForm(form)
      });
      

     
    }
    
}
