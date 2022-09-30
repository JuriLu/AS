import {Component, Input, OnInit} from '@angular/core';
import {AScarsModel} from "../../../core/Models/AScars.model";

@Component({
  selector: 'app-ASCars-single-item',
  templateUrl: './ASCars-single-item.component.html',
  styleUrls: ['./ASCars-single-item.component.scss']
})
export class ASCarsSingleItemComponent implements OnInit {

  @Input() bmwItem: AScarsModel[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
