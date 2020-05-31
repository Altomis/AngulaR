import { Component, OnInit } from '@angular/core';
import { FTPService } from 'src/app/Services/ftp/ftp.service';
import { ClientsService } from 'src/app/Services/clients/clients.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-ftpserver',
  templateUrl: './ftpserver.component.html',
  styleUrls: ['./ftpserver.component.css']
})
export class FtpserverComponent implements OnInit {

  constructor(public service:FTPService,
    public toastr: ToastrService) { }
  
    ngOnInit(): void {
      this.reserForm();
    }
  
    reserForm(form?:NgForm){
      if(form!=null)
        form.resetForm();
      this.service.formData={
        Id: null,
        Address: "",
        Port: null,
        Login: "",
        Passwd: "",
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
