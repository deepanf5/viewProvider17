import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getData():string {
    return "original Data from Service";
  }
}
