import {Component, OnDestroy, OnInit} from '@angular/core';
import {AScarsModel} from "../../core/models/AScars.model";
import {AScarsService} from "../../core/services/AScars.service";
import {Observable, Subscription, switchMap} from "rxjs";
import {CategoryService} from "../../core/services/category.service";


@Component({
  selector: 'app-ASCars-list',
  templateUrl: './ASCars-list.component.html',
  styleUrls: ['./ASCars-list.component.scss']
})
export class ASCarsListComponent implements OnInit, OnDestroy {
  category: Observable<string> = this.categoryService.category$

  subs:Subscription[] = []
  cars: AScarsModel[];

  constructor(
    private ASCarsService: AScarsService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.subs.push(
      this.categoryService.category$
        .pipe(
          switchMap((category: string) => {
            return this.ASCarsService.loadASCarsCategory(category)
          }),
        )
        .subscribe((cars: AScarsModel[]) => this.cars = cars)
    )
  }

  ngOnDestroy():void {
    this.subs.length > 0 && this.subs.forEach((s:Subscription) => s.unsubscribe())
  }

}
