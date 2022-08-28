import { Component, OnInit } from '@angular/core';
import { Miasta, MiastaService } from '../serwis-Miasta/miasta.service';

@Component({
  selector: 'app-miasta',
  templateUrl: './miasta.component.html',
  styleUrls: ['./miasta.component.css']
})
export class MiastaComponent implements OnInit {
  miasto: Miasta[];

  constructor(private miastaService: MiastaService) {
    this.miasto =this.miastaService.getMiasta();
   }

  ngOnInit(): void {
  }

}
