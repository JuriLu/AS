import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, shareReplay, tap} from "rxjs";
import {AScarsModel} from "../Models/AScars.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AScarsService {

  private categorySubject = new BehaviorSubject('NewModel')
  category$: Observable<string> = this.categorySubject.asObservable()

  constructor(private http: HttpClient) {
  }


  loadBMWByCategory(category): Observable<AScarsModel[]> {
    return this.http.get<AScarsModel[]>(environment.apiUrlBMWs)
      .pipe(
        tap(res => console.log('res', res)),
        map(bmws => bmws.filter(bmw => bmw.category === category)),
        shareReplay()
      )
  }

  AddBmw(model: Partial<AScarsModel>): Observable<Partial<AScarsModel>> {
    return this.http.post<Partial<AScarsModel>>(environment.apiUrlBMWs, model)
  }

  giveValue(categ) {
    this.categorySubject.next(categ)
  }


}
