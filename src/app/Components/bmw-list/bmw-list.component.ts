import {Component, Input, OnInit} from '@angular/core';
import {BmwModel} from "../../Models/bmw.model";
import {BmwService} from "../../services/bmw.service";
import {map, Observable} from "rxjs";

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

    const BMWs$ = this.bmwService.loadBMWs()

    BMWs$
      .pipe(
        map(BMWs => BMWs.filter(bmw => bmw.category === 'NewModels')),
      )
      .subscribe(bmw => this.newModels = bmw)

    BMWs$
      .pipe(
        map(BMWs => BMWs.filter(bmw => bmw.category === 'OldSchool')),
      )
      .subscribe(bmw => this.oldSchool = bmw)

  }


}
