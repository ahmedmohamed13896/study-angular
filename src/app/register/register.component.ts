import { AuthService } from './../auth.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  userModel = new User("","","","");
  topicsList :any[] = ['angular','react','vue'];
  topicHasError = true;
  submited = false;

  errorMessage ="";

  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
  }

  validateTopic(value:any){
    if(value ==""){
      this.topicHasError = true
    }
    else{
      this.topicHasError = false
    }
  }

  submitForm(){
    this._AuthService.register(this.userModel).subscribe({
      next:(response)=>{
        console.log(response);
        this.submited = true;
      },
      error: (error)=>{
        this.errorMessage = error.statusText;
        console.log(error);
      },
      complete:()=>{
        'completed'
      }
    })
  }
}
