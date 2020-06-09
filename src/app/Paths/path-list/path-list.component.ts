import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/app/Services/path/path.service';
import { Path } from 'src/app/Models/path';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.css']
})
export class PathListComponent implements OnInit {
  
  constructor(public service: PathService,
    public toastr: ToastrService) { }

  ngOnInit(){
    this.service.refreshList();
  }
populateForm(emp: Path) {
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
