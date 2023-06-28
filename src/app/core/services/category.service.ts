import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CategoryCarsEnum} from "../../shared/enum/categoryCars.enum";

@Injectable()
export class CategoryService {
  private categorySubject: BehaviorSubject<CategoryCarsEnum> = new BehaviorSubject(CategoryCarsEnum.NEWMODEL);
  category$: Observable<string> = this.categorySubject.asObservable();

  constructor() {}

  selectingCategory(category): void {
    this.categorySubject.next(category)
  }
}
