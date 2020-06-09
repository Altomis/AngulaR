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
  selector: 'app-cron',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.css']
})
export class CronComponent implements OnInit {

  constructor(public service:JobsService,public service1:PathService, public dialog:MatDialog,
   toastr: ToastrService) { }
  
    
   ngOnInit(): void {
    
    
  }
}
