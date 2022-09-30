import {Component, OnInit} from '@angular/core';
import {AScarsModel} from "../../Models/AScars.model";
import {AScarsService} from "../../services/AScars.service";
import {switchMap} from "rxjs";
import {CategoryService} from "../../services/category.service";


@Component({
  selector: 'app-ASCars-list',
  templateUrl: './ASCars-list.component.html',
  styleUrls: ['./ASCars-list.component.scss']
})
export class ASCarsListComponent implements OnInit {
  category = this.categoryService.category$


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
          return this.ASCarsService.loadBMWByCategory(category)
        }),
      )
      .subscribe(cars => this.cars = cars)
  }

}
