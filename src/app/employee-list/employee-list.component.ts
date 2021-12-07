import { employee } from './../emplyee.interface';
import { EmployeeService } from '../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, connect, Connectable, interval, multicast, Observable, observable, observeOn, of, refCount, ReplaySubject, share, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees : employee[] =[];
  errorMessage :string ='';
  constructor(private _employeeService : EmployeeService) { }

  // for test
  person:any = {
    fullname(){
      return this.fname + ' in fullname'
    }
  }
  person1={
    fname:'user1'
  }

  person2={
    fname:'user2'
  }

  subscription: Subscription = new Subscription;


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





    // console.log(this.person.fullname.call(this.person1));
    // console.log(this.person.fullname.call(this.person2));



    // const obs$ = new Observable(observer=>{
    //   let i = 0;
    //   setInterval(()=>{
    //     observer.next(i++)
    //   },1000)
    // })


    // console.log('before obs 1');

    // this.subscription = obs$.subscribe(message=>{
    //   console.log(message);
    // })

    // console.log('after obs 1');

    // obs$.subscribe(message=>{
    //   console.log(this.person1.fname + message );
    // })

    // console.log('after obs 2');

    // obs$.subscribe(message=>{
    //   console.log(this.person2.fname + message );
    // })

    // console.log('after obs 3');


    // this.subscription = interval(1000).subscribe(
    //   next=> console.log(next)
    // );

    // console.log(this.subscription);

    // setTimeout(()=>{
    //   this.subscription.unsubscribe();
    // },2500);



    // const mySubject = new Subject();

    // mySubject.subscribe((x)=> console.log('in obs1 ' + x));

    // mySubject.subscribe((y)=> console.log('in obs2 ' + y));

    // const obs$ = of(1,2,3);
    // const subscriper = obs$.subscribe(mySubject);
    //   subscriper.unsubscribe();



    const source = of(1,2,3);

    const subject = new ReplaySubject(2);

    subject.next(1)
    subject.subscribe(x=> console.log('obs1 '+ x));
    subject.subscribe(y=> console.log('obs2 '+ y));
    subject.next(2);
    subject.next(3);

    // multiTasked.subscribe();



  }

}


