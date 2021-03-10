import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-component',
  templateUrl: './hello-world-component.component.html',
  styleUrls: ['./hello-world-component.component.css']
})
export class HelloWorldComponentComponent implements OnInit {
    mailAddress="santhosh.pemmaka@gmail.com"
    helloWorld = "HelloWorld Compoment Working";
    btnSytle = {
        'btn': true,
        'back' : true 
    };
    btnRed = 'red'
    name = "santhosh";
    title = "Understanding angular";
    obj = {
        "firstName": "Santhosh",
        "lastName" : "Pemmaka"
    }
    number = 12.345
    mylst = [
        { 'fname': 'sdalf', 'lname': "asldkf" },
        { 'fname': 'dsaf', 'lname': 'adsfkl' },
        { 'fname': 'asdf', 'lname': 'adsf' },
        {'fname':'sdaf','lname':'asdlf'}
    ]
    fname=""
  constructor() { }

  ngOnInit(): void {
  }
    
    clickFun(e:any) {
      console.log("Enter button",e)
    }
    

}
