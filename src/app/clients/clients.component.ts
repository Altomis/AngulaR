import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients/clients.service';
import { ClientsGroupsService } from 'src/app/Services/clients-groups/clients-groups.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(public service:ClientsService,
    public toastr: ToastrService) { }


    Users = [
      { id: 3, value: 'USER1' },
      { id: 2, value: 'USER2' },
      { id: 3, value: 'USER3' }];

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
