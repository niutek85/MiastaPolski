import { Injectable } from '@angular/core';

export interface Miasta{
  name : string,
  wojewodztwo : string
}
@Injectable({
  providedIn: 'root'
})
export class MiastaService {

  

  constructor() { }

  getMiasta(): Miasta[]{
    return[{name:'Kraków',wojewodztwo:'malopolskie'},{name:'Wrocław',wojewodztwo:'dolnoslaskie'}];
  }
}
