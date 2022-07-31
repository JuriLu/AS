import {Component, OnInit} from '@angular/core';
import {BmwModel} from "../../Models/bmw.model";

@Component({
  selector: 'app-bmw-list',
  templateUrl: './bmw-list.component.html',
  styleUrls: ['./bmw-list.component.scss']
})
export class BmwListComponent implements OnInit {
  category:string = 'newModel'

  newModels : BmwModel[] = [
    {
      img: 'assets/m4f32.jpg',
      cModel: 'M4',
      generation: 'F32',
      engineCm3: 2979,
      engineCombustion: 'petrol',
      YOP: 2013,
      bodyType: 'coupe',
      power: 425
    },
    {
      img: 'assets/m3 e36.jpg',
      cModel: 'M3',
      generation: 'E36',
      engineCm3: 3201,
      engineCombustion: 'petrol',
      YOP: 1995,
      bodyType: 'coupe',
      power: 321
    },
  ]


  constructor() {
  }

  ngOnInit(): void {
  }



}
