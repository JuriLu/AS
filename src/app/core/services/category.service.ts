import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CategoryCars} from "../models/AScars.model";

@Injectable()
export class CategoryService {
  private categorySubject: BehaviorSubject<CategoryCars> = new BehaviorSubject(CategoryCars.NEWMODEL);
  category$: Observable<string> = this.categorySubject.asObservable();

  constructor() {}

  selectingCategory(category): void {
    this.categorySubject.next(category)
  }
}
