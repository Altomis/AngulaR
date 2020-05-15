import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './share/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './share/layouts/site-layout/site-layout.component';
import { BackupPageComponent } from './backup-page/backup-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { LogsPageComponent } from './logs-page/logs-page.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
{path:'', component:AuthLayoutComponent,children:[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginPageComponent}]},
  {path:'users',component:UserPageComponent},
{path:'', component:SiteLayoutComponent,children:[
  {path:'',redirectTo:'/users',pathMatch:'full'},
  {path:'backups',component:BackupPageComponent},
  //{path:'users',component:UserPageComponent},
  {path:'logs',component:LogsPageComponent},
  {path:'groups',component:GroupsPageComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
