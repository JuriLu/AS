import {Component, OnInit} from '@angular/core';
import {AScarsModel} from "../../Models/AScars.model";
import {AScarsService} from "../../services/AScars.service";
import {switchMap} from "rxjs";
import {CategoryService} from "../../services/category.service";


@Component({
  selector: 'app-bmw-list',
  templateUrl: './bmw-list.component.html',
  styleUrls: ['./bmw-list.component.scss']
})
export class BmwListComponent implements OnInit {
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
