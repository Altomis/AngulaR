import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients/clients.service';
import { Clients } from 'src/app/Models/clients';
import { ClientsGroupsService } from 'src/app/Services/clients-groups/clients-groups.service';
import { ClientsGroups } from 'src/app/Models/clients-groups';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
import { UserListComponent } from '../users/user-list/user-list.component';
import { ClientsComponent } from '../clients/clients.component';
import { BackupPageComponent } from '../backup-page/backup-page.component';
import { JobsComponent } from '../jobs/jobs.component';



@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})

export class GroupsPageComponent implements OnInit {


  constructor(public service: ClientsGroupsService,
    public dialog:MatDialog,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(emp: ClientsGroups) {
  this.service.formData = Object.assign({}, emp);
}

onDelete(id: number) {
  if (confirm('Are you sure to delete this record?')) {
    this.service.deleteEmployee(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully', 'EMP. Register');
    });
  }

}

  onCreate1(){
    this.dialog.open(ClientsComponent);

  }
  onCreate2(){
    this.dialog.open(JobsComponent);
  }
}
