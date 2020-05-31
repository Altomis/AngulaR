import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients/clients.service';
import { ClientsGroupsService } from 'src/app/Services/clients-groups/clients-groups.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service:ClientsService,
    public toastr: ToastrService) { }
  
    ngOnInit(): void {
      this.reserForm();
    }
  
    reserForm(form?:NgForm){
      if(form!=null)
        form.resetForm();
      this.service.formData={
        Id: null,
        Pc_Name: "",
        MacAddress: "",
        IpAddress: "",
        Created: "",
        Active: true,
       
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
