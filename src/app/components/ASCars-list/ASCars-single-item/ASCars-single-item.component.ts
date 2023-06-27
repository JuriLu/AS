import {Component, Input, OnInit} from '@angular/core';
import {AScarsModel} from "../../../core/models/AScars.model";

@Component({
  selector: 'app-ASCars-single-item',
  templateUrl: './ASCars-single-item.component.html',
  styleUrls: ['./ASCars-single-item.component.scss']
})
export class ASCarsSingleItemComponent implements OnInit {

  @Input() carModel: AScarsModel
  title:string = ''
  constructor() {
  }

  ngOnInit(): void {
    this.title = this.carModel.cModel + ' '+ this.carModel.generation
  }

}
