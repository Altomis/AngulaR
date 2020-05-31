import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients/clients.service';
import { Clients } from 'src/app/Models/clients';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public service: ClientsService,
    public toastr: ToastrService) { }

  ngOnInit(){
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
}
