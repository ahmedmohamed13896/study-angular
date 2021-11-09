import { employee } from './../emplyee.interface';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees : employee[] =[];
  errorMessage :string ='';
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe({
      next: (data)=>{
       this.employees = data;
      },
      error: (error)=>{
        this.errorMessage = error.message;
       console.log(error);
      }
    });
  }

}
