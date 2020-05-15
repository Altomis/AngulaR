import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './share/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './share/layouts/site-layout/site-layout.component';
import { BackupPageComponent } from './backup-page/backup-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { LogsPageComponent } from './logs-page/logs-page.component';
import { EmloyeesComponent } from './emloyees/emloyees.component';
import { EmloyeeComponent } from './emloyees/emloyee/emloyee.component';
import { EmloyeeListComponent } from './emloyees/emloyee-list/emloyee-list.component';
import { EmployeeService } from './shared/employee.service';
import { AdminService } from './Services/admin/admin.service';
import { ClientsService } from './Services/clients/clients.service';
import { ClientsGroupsService } from './Services/clients-groups/clients-groups.service';
import { FTPService } from './Services/ftp/ftp.service';
import { GroupsService } from './Services/groups/groups.service';
import { JobsService } from './Services/jobs/jobs.service';
import { PathService } from './Services/path/path.service';


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
    EmloyeesComponent,
    EmloyeeComponent,
    EmloyeeListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
