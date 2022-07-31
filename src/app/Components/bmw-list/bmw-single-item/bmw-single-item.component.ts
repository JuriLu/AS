import {Component, Input, OnInit} from '@angular/core';
import {BmwModel, engComb} from "../../../Models/bmw.model";

@Component({
  selector: 'app-bmw-single-item',
  templateUrl: './bmw-single-item.component.html',
  styleUrls: ['./bmw-single-item.component.scss']
})
export class BmwSingleItemComponent implements OnInit {

    @Input() bmwItem: { img: string, cModel: string, generation: string, engineCm3: number, engineCombustion: engComb, YOP: number, bodyType: string, power: number,
   }

  constructor() { }

  ngOnInit(): void {
  }

}
