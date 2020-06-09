import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './share/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './share/layouts/site-layout/site-layout.component';
import { BackupPageComponent } from './backup-page/backup-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { LogsPageComponent } from './logs-page/logs-page.component';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';



import { AdminService } from './Services/admin/admin.service';
import { ClientsService } from './Services/clients/clients.service';
import { ClientsGroupsService } from './Services/clients-groups/clients-groups.service';
import { FTPService } from './Services/ftp/ftp.service';
import { GroupsService } from './Services/groups/groups.service';
import { JobsService } from './Services/jobs/jobs.service';
import { PathService } from './Services/path/path.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { EmployeeService } from './shared/employee.service';
import { JobsComponent } from './jobs/jobs.component';
import { FtpserverComponent } from './ftpserver/ftpserver.component';
import { ClientsComponent } from './clients/clients.component';
import { PathCComponent } from './Paths/path-c/path-c.component';
import { PathListComponent } from './Paths/path-list/path-list.component';
import { PathsComponent } from './Paths/Paths.component';
import { CronComponent } from './cron/cron.component';
import { MailsComponent } from './mails/mails.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    BackupPageComponent,
    UserPageComponent,
    GroupsPageComponent,
    LogsPageComponent,
    UsersComponent,
    UserComponent,  
    UserListComponent,  
    EmployeesComponent,
    EmployeeComponent,
    AboutPageComponent,
    JobsComponent,
    FtpserverComponent,
    ClientsComponent,
   
    PathCComponent,
    PathListComponent,
    PathsComponent,
    CronComponent,
    MailsComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot()
    
  ],
  providers: [ClientsService,EmployeeService,],
  bootstrap: [AppComponent],
  entryComponents:[UserComponent,UserListComponent,FtpserverComponent]
})
export class AppModule { }
