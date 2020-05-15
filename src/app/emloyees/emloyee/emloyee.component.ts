import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emloyee',
  templateUrl: './emloyee.component.html',
  styleUrls: ['./emloyee.component.css']
})
export class EmloyeeComponent implements OnInit {

  constructor(private service:EmployeeService,
  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reserForm();
  }

  reserForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData={
      Id:null,
      Firstname :'',
      Surname :'',
      Login :'',
      Passwd :'',
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
