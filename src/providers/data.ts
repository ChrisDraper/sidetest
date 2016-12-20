import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  applocs: any;

  constructor(public http: Http) {
    console.log('Hello Data Provider');

    this.applocs =   [
        { title: 'Lynehams', locationid: '3740' },
        { title: 'Heathrow', locationid: '3047' },
        { title: 'Benson', locationid: '3658' },
        { title: 'Glenanne', locationid: '3923' }
      ];
  }


}
