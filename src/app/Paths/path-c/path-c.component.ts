import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/Services/jobs/jobs.service';
import { FTPService } from 'src/app/Services/ftp/ftp.service';
import { PathService } from 'src/app/Services/path/path.service';
import { ClientsGroupsService } from 'src/app/Services/clients-groups/clients-groups.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { FtpserverComponent } from 'src/app/ftpserver/ftpserver.component';

@Component({
  selector: 'app-path-c',
  templateUrl: './path-c.component.html',
  styleUrls: ['./path-c.component.css']
})
export class PathCComponent implements OnInit {

  constructor(public service:PathService, public dialog:MatDialog,
    toastr: ToastrService) { }
    
    
    onCreate(){
      this.dialog.open(FtpserverComponent);
  
    }
  
     ngOnInit(): void {
       this.reserForm();
       
     }
 
  
     reserForm(form?:NgForm){
       if(form!=null)
         form.resetForm();
 
               
               
                 this.service.formData={
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
