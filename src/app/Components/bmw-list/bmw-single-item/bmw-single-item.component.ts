import {Component, Input, OnInit} from '@angular/core';
import {BmwModel} from "../../../Models/bmw.model";

@Component({
  selector: 'app-bmw-single-item',
  templateUrl: './bmw-single-item.component.html',
  styleUrls: ['./bmw-single-item.component.scss']
})
export class BmwSingleItemComponent implements OnInit {

    @Input() bmwItem: BmwModel[]

  constructor() { }

  ngOnInit(): void {
  }

}
