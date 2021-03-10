import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceGenService {

    constructor() { }
    getSourcedata() {
        return ['yellow','green','red','blue']
    }
}
