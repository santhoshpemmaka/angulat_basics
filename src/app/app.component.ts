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
    employeesList =[]
    emptymsg = "Right now no list present.Please press refresh button";
    constructor(dataServiceGenService: DataServiceGenService) {
        this.dataSources = dataServiceGenService.getSourcedata();
    }
    onclickFun() {
        this.btnClick = "Hello World";
    }
    eventFun(value:any) {
        console.log(value)
    }
    onclcikFunction()   {
        this.employeesList = [
        // {
        //     'id': 1, 'name': 'Guillaume', 'title': 'Frontend Developer'
        // },
        // {
        //     'id': 2, 'name': 'Guillaume1', 'title': 'Frontend Developer'
        // },
        // {
        //     'id': 3, 'name': 'Guillaume2', 'title': 'Frontend Developer'
        // },
        // {
        //     'id': 4, 'name': 'Guillaume', 'title': 'Frontend Developer'
        // },
    ]

        
    }

    trackEmployee(num:number,employee:any) {
        return employee.id
    }
    // onSubmit(f:any) {
    //     console.log(f.value)
    //     f.reset()
    // }

}
