import { Component, OnInit } from '@angular/core';
import { Mailser } from 'src/app/Services/Mailser'
import { FTPService } from 'src/app/Services/ftp/ftp.service';
import { PathService } from 'src/app/Services/path/path.service';
import { ClientsGroupsService } from 'src/app/Services/clients-groups/clients-groups.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { FtpserverComponent } from '../ftpserver/ftpserver.component';
import { PathsComponent } from 'src/app/Paths/Paths.component';


@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {

  constructor(public service:Mailser, public dialog:MatDialog,
    toastr: ToastrService) { }

  ngOnInit(): void {

    this.reserForm();
  }

  reserForm(form?:NgForm){
    if(form!=null)
      form.resetForm();

              this.service.formData={
                To: "",
                Subject:"",
                Body: "",
                
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
