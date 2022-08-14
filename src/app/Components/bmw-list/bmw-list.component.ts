import {Component, Input, OnInit} from '@angular/core';
import {BmwModel} from "../../Models/bmw.model";

@Component({
  selector: 'app-bmw-list',
  templateUrl: './bmw-list.component.html',
  styleUrls: ['./bmw-list.component.scss']
})
export class BmwListComponent implements OnInit {
 @Input() category: string

  newModels: BmwModel[] = []
  oldSchool: BmwModel[] = []


  BMWs: BmwModel[];


  constructor() {
  }

  ngOnInit(): void {
    this.newModels = this.BMWs.filter(bmw => bmw.category === 'NewModels')
    this.oldSchool = this.BMWs.filter(bmw => bmw.category === 'OldSchool')
  }


}
