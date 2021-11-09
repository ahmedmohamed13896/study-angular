import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name:string = "ahmed";
  isDisabled = true;
  successClass = "text-success";
  hasError = true;
  isSpecial = true;
  classColor = "#00f"

  classes= {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial
  }

  arr = ['This is message1 from child component','This is message2 from child component']

  styles = {
    color:"#CFCFCF",
    fontWeight:'bold'
  }

  displayName = false;
  inputValue = "";

  pickedColor= "red";


  colors = ['red','green','blue','purple'];




  @Input('parentData') pData : any;

  @Output()  childEvent = new EventEmitter();


  constructor() { }


  ngOnInit(): void {
  }

  handleChange(event : any){
    console.log(event.target.value);
  }

  logMessage(myInput:any){
    console.log(myInput);
  }

  fireClick(){
    this.childEvent.emit(this.arr);
  }


}
