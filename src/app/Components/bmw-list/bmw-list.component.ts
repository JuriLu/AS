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
  leMans$?: Observable<BmwModel[]>;
  goldenDecade$?: Observable<BmwModel[]>;
  newMillenial$?: Observable<BmwModel[]>;
  bikes$?: Observable<BmwModel[]>;


  constructor(private bmwService: BmwService) {
  }

  ngOnInit(): void {
    this.reloadBMW()

  }

  reloadBMW(){
    this.newModels$ = this.bmwService.loadBMWByCategory('NewModel')
    this.oldSchool$ = this.bmwService.loadBMWByCategory('OldSchool')
    this.legendary$ = this.bmwService.loadBMWByCategory('Legendary')
    this.leMans$ = this.bmwService.loadBMWByCategory('LeMans')
    this.goldenDecade$ = this.bmwService.loadBMWByCategory('GoldenDecade')
    this.newMillenial$ = this.bmwService.loadBMWByCategory('NewMillenial')
    this.bikes$ = this.bmwService.loadBMWByCategory('Bikes')
  }


}
