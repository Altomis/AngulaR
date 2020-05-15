import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Emloyee } from 'src/app/shared/emloyee-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emloyee-list',
  templateUrl: './emloyee-list.component.html',
  styleUrls: ['./emloyee-list.component.css']
})
export class EmloyeeListComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit(){
    this.service.refreshList();
  }
populateForm(emp: Emloyee) {
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
