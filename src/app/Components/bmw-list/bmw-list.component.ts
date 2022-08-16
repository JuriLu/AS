import {Component, Input, OnInit} from '@angular/core';
import {BmwModel} from "../../Models/bmw.model";
import {BmwService} from "../../services/bmw.service";

@Component({
  selector: 'app-bmw-list',
  templateUrl: './bmw-list.component.html',
  styleUrls: ['./bmw-list.component.scss']
})
export class BmwListComponent implements OnInit {
  @Input() category: string

  BMWs: BmwModel[];
  newModels: BmwModel[];
  oldSchool: BmwModel[];


  constructor(private bmwService: BmwService) {
  }

  ngOnInit(): void {

    this.bmwService.loadBMWByCategory('NewModels').subscribe(
      BMWs => this.newModels = BMWs
    )

    this.bmwService.loadBMWByCategory('OldSchool').subscribe(
      BMWs => this.oldSchool = BMWs
    )
  }


}
