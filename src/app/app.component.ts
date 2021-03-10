import { Component } from '@angular/core';
import { DataServiceGenService } from './data-service-gen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-dream-app';
    dataSources;
    btnClick = ""
    constructor(dataServiceGenService: DataServiceGenService) {
        this.dataSources = dataServiceGenService.getSourcedata();
    }
    onclickFun() {
        this.btnClick = "Hello World";
    }
    eventFun(value:any) {
        console.log(value)
    }

}
