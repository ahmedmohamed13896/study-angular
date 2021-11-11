import { Directive, OnDestroy, OnInit } from '@angular/core';
let nextId = 1;

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit,OnDestroy {

  private id = nextId++;
  constructor() { }

  ngOnInit(){
    console.log(`Spy #${this.id} onInit`);
  }
  ngOnDestroy(){
    console.log(`Spy #${this.id} onDestroy`);
  }

}
