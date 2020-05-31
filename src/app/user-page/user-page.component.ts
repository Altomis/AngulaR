import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients/clients.service';
import { Clients } from 'src/app/Models/clients';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { UserListComponent } from '../users/user-list/user-list.component';
import { UserComponent } from '../users/user/user.component';
import { JobsComponent } from '../jobs/jobs.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  constructor(public service: ClientsService,
    public dialog:MatDialog,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
populateForm(emp: Clients) {
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
  this.dialog.open(UserComponent);

}
  onCreate2(){
  this.dialog.open(JobsComponent);
}
}
