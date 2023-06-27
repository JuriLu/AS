import {Component, OnInit} from '@angular/core';
import {AScarsModel} from "../../core/models/AScars.model";
import {AScarsService} from "../../core/services/AScars.service";
import {Observable, switchMap} from "rxjs";
import {CategoryService} from "../../core/services/category.service";


@Component({
  selector: 'app-ASCars-list',
  templateUrl: './ASCars-list.component.html',
  styleUrls: ['./ASCars-list.component.scss']
})
export class ASCarsListComponent implements OnInit {
  category: Observable<string> = this.categoryService.category$


  cars: AScarsModel[];

  constructor(
    private ASCarsService: AScarsService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {

    this.categoryService.category$
      .pipe(
        switchMap(category => {
          return this.ASCarsService.loadASCarsyCategory(category) //TODO: Change function Name
        }),
      )
      .subscribe((cars: AScarsModel[]) => this.cars = cars)
  }

}
