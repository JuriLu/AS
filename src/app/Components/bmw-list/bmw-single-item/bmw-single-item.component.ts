import {Component, Input, OnInit} from '@angular/core';
import {AScarsModel} from "../../../Models/AScars.model";

@Component({
  selector: 'app-bmw-single-item',
  templateUrl: './bmw-single-item.component.html',
  styleUrls: ['./bmw-single-item.component.scss']
})
export class BmwSingleItemComponent implements OnInit {

  @Input() bmwItem: AScarsModel[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
