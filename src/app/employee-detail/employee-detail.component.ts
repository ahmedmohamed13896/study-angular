import { employee } from './../emplyee.interface';
import { ApiService } from './../services/api.service';
import { employeeModel } from './employee-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  formValue!:FormGroup;
  employeeModelObj :employeeModel= new employeeModel();

  employees !:any;
  errorMessage ="";

  constructor(private formbuilder:FormBuilder,private apiService:ApiService) {
    this.getAllemployee();
  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fname:[''],
      lname:[''],
      email:[''],
      mobile:[''],
      age:[''],
    });

  }

  // postEmployeeDetails
  postEmployeeDetails(){
    this.employeeModelObj.fname = this.formValue.value.fname;
    this.employeeModelObj.lname = this.formValue.value.lname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.age = this.formValue.value.age;

    this.formValue.reset();

    this.apiService.postEmployee(this.employeeModelObj).subscribe({
      next: (res)=>{
        this.employees.push(res);
        document.getElementById('close')?.click();
        alert('Emplyee added successfully')
      },
      error: (error)=>{
        console.log(error.message);
      }
    });
  }

  // getAllemployee
  getAllemployee(){
    this.apiService.getEmployee().subscribe({
      next: (res)=>{
        this.employees = res;
      },
      error : (error)=>{
        this.errorMessage =error?.message;
        console.log(error);
      }
    })
  }
  deleteEmployee(employee:any){
    this.apiService.deleteEmployee(employee.id).subscribe({
      next:()=>{
        this.employees = this.employees.filter(((emp:any)=>employee.id != emp.id));
      },
      error:(error)=>{
        console.log(error.message);
      },

    });
  }

  onEdit(employee:any){
    this.employeeModelObj.id = employee.id;
    this.formValue.get('fname')?.setValue(employee.fname);
    this.formValue.get('lname')?.setValue(employee.lname);
    this.formValue.get('email')?.setValue(employee.email);
    this.formValue.get('mobile')?.setValue(employee.mobile);
    this.formValue.get('age')?.setValue(employee.age);
  }

  onClose(){
    this.formValue.reset();
  }
  updateEmployeeDetails(){
    this.employeeModelObj.fname = this.formValue.value.fname;
    this.employeeModelObj.lname = this.formValue.value.lname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.age = this.formValue.value.age;
    console.log();


    this.apiService.updateEmployee(this.employeeModelObj , this.employeeModelObj.id).subscribe({
      next:(res)=>{
        this.formValue.reset();
        document.getElementById('close')?.click();
        console.log(res);
        this.employees = this.employees.map((emp:any) => {
          if(res.id == emp.id){
            return res;
          }
          return emp;
        });
      }
    })
  }

}
