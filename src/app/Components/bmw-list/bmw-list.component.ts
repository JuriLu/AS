import {Component, Input, OnInit} from '@angular/core';
import {BmwModel} from "../../Models/bmw.model";
import {BmwService} from "../../services/bmw.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-bmw-list',
  templateUrl: './bmw-list.component.html',
  styleUrls: ['./bmw-list.component.scss']
})
export class BmwListComponent implements OnInit {
  @Input() category: string

  BMWs: BmwModel[];
  newModels$?: Observable<BmwModel[]>;
  oldSchool$?: Observable<BmwModel[]>;
  legendary$?: Observable<BmwModel[]>;


  constructor(private bmwService: BmwService) {
  }

  ngOnInit(): void {
    this.reloadBMW()

  }

  reloadBMW(){
    this.newModels$ = this.bmwService.loadBMWByCategory('NewModel')
    this.oldSchool$ = this.bmwService.loadBMWByCategory('OldSchool')
    this.legendary$ = this.bmwService.loadBMWByCategory('Legendary')
  }


}
