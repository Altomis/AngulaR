import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/Services/jobs/jobs.service';
import { ClientsGroupsService } from 'src/app/Services/clients-groups/clients-groups.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { FtpserverComponent } from '../ftpserver/ftpserver.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(public service:JobsService, public dialog:MatDialog,
   toastr: ToastrService) { }
   
   BackupType = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

 
    ngOnInit(): void {
      this.reserForm();
    }
    onCreate1(){
      this.dialog.open(FtpserverComponent);
  
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
