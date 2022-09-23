import {Component, OnInit} from '@angular/core';
import {AScarsModel} from "../../Models/AScars.model";
import {AScarsService} from "../../services/AScars.service";
import {Observable, switchMap} from "rxjs";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-bmw-list',
  templateUrl: './bmw-list.component.html',
  styleUrls: ['./bmw-list.component.scss']
})
export class BmwListComponent implements OnInit {
  category = this.categoryService.category$


  BMWs: AScarsModel[];
  newModels$?: Observable<AScarsModel[]>;
  oldSchool$?: Observable<AScarsModel[]>;
  legendary$?: Observable<AScarsModel[]>;
  leMans$?: Observable<AScarsModel[]>;
  electric$?: Observable<AScarsModel[]>;
  newMillenial$?: Observable<AScarsModel[]>;
  bikes$?: Observable<AScarsModel[]>;


  constructor(
    private ASCarsService: AScarsService,
    private categoryService: CategoryService
    ) {
  }

  ngOnInit(): void {
    this.reloadBMW()
  }

  reloadBMW() {

    this.newModels$ = this.ASCarsService.loadBMWByCategory('NewModel')
    this.oldSchool$ = this.ASCarsService.loadBMWByCategory('OldSchool')
    this.legendary$ = this.ASCarsService.loadBMWByCategory('Legendary')
    this.leMans$ = this.ASCarsService.loadBMWByCategory('LeMans')
    this.electric$ = this.ASCarsService.loadBMWByCategory('Electric')
    this.newMillenial$ = this.ASCarsService.loadBMWByCategory('NewMillenial')
    this.bikes$ = this.ASCarsService.loadBMWByCategory('Bikes')
  }


}
