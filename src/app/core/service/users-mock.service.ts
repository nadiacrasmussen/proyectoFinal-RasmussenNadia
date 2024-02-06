import { Injectable } from "@angular/core";

@Injectable()
export class UserMockService{
  constructor(){
    console.log('se ejecuta el mock');
  }
}
