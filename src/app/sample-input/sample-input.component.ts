import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample-input',
  templateUrl: './sample-input.component.html',
  styleUrls: ['./sample-input.component.css']
})
export class SampleInputComponent implements OnInit {
    @Input('inputValue') MyinputValue: any;
    @Output() eventEnter = new EventEmitter()
    constructor() { }
    
  ngOnInit(): void {
  }
    setupFun() {
      this.eventEnter.emit(this.MyinputValue)
  }

}
